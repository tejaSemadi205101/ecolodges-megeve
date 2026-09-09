import qs from 'qs'
import type {
  StrapiPlacesItemsResponse,
  StrapiLocationSurroundingPage,
  StrapiLocationSurroundingPageResponse,
} from '~/types/location-surrounding'

export default defineEventHandler(
  async (): Promise<StrapiLocationSurroundingPageResponse> => {
    const config = useRuntimeConfig()

    if(!config.strapiBaseUrl){
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured.'
      })
    }

    const pageQuery = qs.stringify(
      {
        populate: {
          heroSection: {
            populate: {
              backgroundMedia: true,
            },
          },
          overviewHeader: true,
          featuredLocation: true,
        },
      },
      {
        encodeValuesOnly: true
      }
    )

    const placesQuery = qs.stringify(
      {
        populate: {
          placesCollection: {
            populate: {
              header: true,
              image: true,
            }
          },
        },
      },
      {
        encodeValuesOnly: true
      }
    )

    const headers = config.strapiApiToken
    ? {
      Authorization: `Bearer ${config.strapiApiToken}`
    } : undefined

    const [pageResponse, placesResponse] = await Promise.all([
      $fetch<{ data: StrapiLocationSurroundingPage }>(
        `${config.strapiBaseUrl}/api/location-surrounding?${pageQuery}`,
        {
          headers,
        }
    ),


      $fetch<StrapiPlacesItemsResponse>(
        `${config.strapiBaseUrl}/api/places-items?${placesQuery}`,
        {
          headers,
        }
      )
    ])

    return {
      data: {
        heroSection: pageResponse.data.heroSection,
        overviewHeader: pageResponse.data.overviewHeader,
        featuredLocation: pageResponse.data.featuredLocation,
        placesItems: placesResponse.data,
      }
    }
  }
)
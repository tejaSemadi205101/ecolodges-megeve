import qs from 'qs'
import type { Config } from 'tailwind-merge'
import HeroSection from '~/components/sections/HeroSection.vue'
import type { 
  StrapiAccommodationResponse,
  StrapiAccommodationPage,
  StrapiAccommodationPageResponse
} from '~/types/accommodation'

export default defineEventHandler(
  async (): Promise<StrapiAccommodationPageResponse> => {
    const config = useRuntimeConfig()

    if (!config.strapiBaseUrl) {
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured.',
      })
    }

    const pageQuery = qs.stringify(
      {
        populate: {
          heroSection: {
            populate: {
              backgroundMedia: true
            }
          },

          AccomodationList: true,

          USP: {
            populate: {
              USPItem: {
                populate: {
                  image: true,
                }
              }
            }
          }
        },
      },
      {
        encodeValuesOnly: true,
      }
    )

    const accommodationQuery = qs.stringify(
      {
        populate: {
          gallery: true,
          facilties_datum: {
            populate: '*',
          },
          usp_accomodation: {
            populate: '*',
          },
          season_rates: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    )

    const [pageResponse, accommodationsResponse] = await Promise.all([
      $fetch<{ data : StrapiAccommodationPage }>(
        `${config.strapiBaseUrl}/api/accomodation?${pageQuery}`,
        {
          headers: config.strapiApiToken
          ?{
            Authorization: `Bearer ${config.strapiApiToken}`,
          }
          : undefined
        }
      ),

      $fetch<StrapiAccommodationResponse>(
        `${config.strapiBaseUrl}/api/accomodation-lists?${accommodationQuery}`,
        {
          headers: config.strapiApiToken
            ? {
                Authorization: `Bearer ${config.strapiApiToken}`,
              }
            : undefined,
        },
      )
    ])

    console.log(
      'Accommodation collection response received:',
      !!accommodationsResponse,
    )

    return {
      data: {
        heroSection: pageResponse.data.heroSection,
        AccomodationList: pageResponse.data.AccomodationList,
        USP: pageResponse.data.USP,
        accommodations: accommodationsResponse.data,
      }
    }
  },
)
import qs from 'qs'
import type { 
  StrapiExperiencesResponse, 
  StrapiExperiencesPage, 
  StrapiExperiencesPageResponse 
} from '~/types/experiences'

export default defineEventHandler(async (): Promise<StrapiExperiencesPageResponse> => {
    const config = useRuntimeConfig()

    if(!config.strapiBaseUrl){
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
            },
          },
          overviewSection: {
            populate: {
              imageSection: true
            },
          },
        },
      },
      {
        encodeValuesOnly: true
      },
    )

    const itemsQuery = qs.stringify(
      {
        populate: {
          experienceHeader: true,
          experienceDatas: true,
          experienceTimes: true,
          experienceImage: true,
        },
      },
      {
        encodeValuesOnly: true
      },
    )

    const [pageResponse, itemsResponse] = await Promise.all([
      $fetch<{ data: StrapiExperiencesPage }>(
        `${config.strapiBaseUrl}/api/experience?${pageQuery}`,
        {
          headers: config.strapiApiToken
          ?{ Authorization: `Bearer ${config.strapiApiToken}`} : undefined
        }
      ),

      $fetch<StrapiExperiencesResponse>(
        `${config.strapiBaseUrl}/api/experiences-items?${itemsQuery}`,
        {
          headers: config.strapiApiToken
          ? { Authorization: `Bearer ${config.strapiApiToken}`, } : undefined
        }
      )
    ])

    return {
      data: {
        heroSection: pageResponse.data.heroSection,
        overviewSection: pageResponse.data.overviewSection,
        experiencesItems: itemsResponse.data,
      },
    }
  }
)
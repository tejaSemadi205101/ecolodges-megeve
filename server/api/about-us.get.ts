import qs from 'qs'

import type {
  StrapiAboutUsPage,
  StrapiAboutUsPageResponse,
} from '~/types/about-us'

export default defineEventHandler(
  async (): Promise<StrapiAboutUsPageResponse> =>{
    const config = useRuntimeConfig()

    if(!config.strapiBaseUrl){
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured',
      })
    }

    const query = qs.stringify(
      {
        populate:{
          heroSection: {
            populate: '*'
          },
          companyStats: {
            populate: '*'
          },
          companyStory:{
            populate: '*'
          },
          propertyGallery: {
            populate: '*'
          },
          uspSection: {
            populate: '*'
          },
          brandUSPList: {
            populate: '*'
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    )

    const headers = config.strapiApiToken
    ? {
      Authorization: `Bearer ${config.strapiApiToken}`,
    } : undefined

    const response = await $fetch<StrapiAboutUsPageResponse>(
      `${config.strapiBaseUrl}/api/about-us?${query}`,
      {
        headers,
      },
    )

    return response
  },
)
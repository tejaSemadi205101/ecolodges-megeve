import qs from 'qs'

import type { StrapiTermsAndConditionsPageResponse } from '~/types/terms-and-conditions'

export default defineEventHandler(
  async (): Promise<StrapiTermsAndConditionsPageResponse> => {
    const config = useRuntimeConfig()

    if(!config.strapiBaseUrl){
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured'
      })
    }

    const query = qs.stringify(
      {
        populate: {
          heroSection: {
            populate: '*'
          },
          termList: {
            populate: '*'
          },
        },
      },
      {
        encodeValuesOnly: true
      },
    )

    const headers = config.strapiApiToken
    ? {
        Authorization: `Bearer ${config.strapiApiToken}`
    } : undefined

    const response = await $fetch<StrapiTermsAndConditionsPageResponse>(
      `${config.strapiBaseUrl}/api/terms-and-conditions-brand?${query}`
    )

    return response
  }
)
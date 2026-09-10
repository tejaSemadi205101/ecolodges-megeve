import qs from 'qs'

import type {
  StrapiContactUsPageResponse,
} from '~/types/contact-us'

export default defineEventHandler(
  async (): Promise<StrapiContactUsPageResponse> => {
    const config = useRuntimeConfig()

    if (!config.strapiBaseUrl) {
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured.',
      })
    }

    const query = qs.stringify(
      {
        populate: {
          heroSection: {
            populate: '*',
          },
          contactHeader: {
            populate: '*',
          },
          contactList: {
            populate: '*',
          },
          locationsHeader: {
            populate: '*',
          },
          locationList: {
            populate: '*',
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
        }
      : undefined

    const response = await $fetch<StrapiContactUsPageResponse>(
      `${config.strapiBaseUrl}/api/contact-us?${query}`,
      {
        headers,
      },
    )

    return response
  },
)
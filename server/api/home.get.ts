import qs from 'qs'
import type { StrapiHomeResponse } from '~/types/home'

export default defineEventHandler(async (): Promise<StrapiHomeResponse> => {
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
        heroSection: { populate: { backgroundMedia: true } },
        introduction: { populate: { imageSection: true } },
        featuredAccomodation: true,
        featuredExperiences: {
          populate: {
            experienceslisting: { populate: { experiencesPhoto: true } },
          },
        },
      },
    },
    { encodeValuesOnly: true },
  )

  return await $fetch<StrapiHomeResponse>(`${config.strapiBaseUrl}/api/home?${query}`, {
    headers: config.strapiApiToken
      ? { Authorization: `Bearer ${config.strapiApiToken}` }
      : undefined,
  })
})

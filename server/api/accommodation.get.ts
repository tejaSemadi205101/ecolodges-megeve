import qs from 'qs'
import type { StrapiAccommodationResponse } from '~/types/accommodation'

export default defineEventHandler(
  async (): Promise<StrapiAccommodationResponse> => {
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
          gallery: {
            populate: '*',
          },
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

    return await $fetch<StrapiAccommodationResponse>(
      `${config.strapiBaseUrl}/api/accomodation-lists?${query}`,
      {
        headers: config.strapiApiToken
          ? {
              Authorization: `Bearer ${config.strapiApiToken}`,
            }
          : undefined,
      },
    )
  },
)
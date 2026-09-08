import qs from 'qs'
import type { StrapiExperiencesResponse } from '~/types/experiences'

export default defineEventHandler(async (): Promise<StrapiExperiencesResponse> => {
  const config = useRuntimeConfig()

  if(!config.strapiBaseUrl){
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_STRAPI_URL is not configured.',
    })
  }
  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true
    }
  )

  return await $fetch<StrapiExperiencesResponse>(
    `${config.strapiBaseUrl}/api/experiences-items?${query}`,
    {
      headers: config.strapiApiToken
      ? { Authorization: `Bearer ${config.strapiApiToken}`,}
      : undefined,
    }
  )
})
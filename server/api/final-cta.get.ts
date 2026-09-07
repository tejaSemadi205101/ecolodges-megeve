import type { StrapiFinalCTAResponse } from '~/types/final-cta'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  return await $fetch<StrapiFinalCTAResponse>(
    `${config.strapiBaseUrl}/api/final-cta-section?populate[finalCTASection][populate]=*`,
    { headers: { Authorization: `Bearer ${config.strapiApiToken}` } }
  )
})
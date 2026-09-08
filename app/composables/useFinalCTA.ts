import type { StrapiFinalCTAResponse } from '~/types/final-cta'
import { mapFinalCTASection } from '~/mappers/final-cta-mapper'

export function useFinalCTA() {
  const config = useRuntimeConfig()
  return useAsyncData('final-cta-section', async () => {
    const res = await $fetch<StrapiFinalCTAResponse>('/api/final-cta')
    return mapFinalCTASection(res, config.public.strapiBaseUrl)
  })
}
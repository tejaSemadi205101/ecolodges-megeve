import type { 
  StrapiAccommodationPageResponse, 
  AccommodationPageData } from '~/types/accommodation'
import { mapAccommodationPage } from '~/mappers/accommodation-mapper'

export function useAccommodation() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiAccommodationPageResponse>('/api/accommodation', () => $fetch('/api/accommodation'))

  const accommodations = computed<AccommodationPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapAccommodationPage(response.value, config.public.strapiBaseUrl)
  })

  return {
    accommodations,
    pending,
    error,
    refresh,
  }
}
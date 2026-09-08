import type { StrapiAccommodationResponse, Accommodation } from '~/types/accommodation'
import { mapAccommodationData } from '~/mappers/accommodation-mapper'

export function useAccommodation() {
  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiAccommodationResponse>('/api/accommodation', () => $fetch('/api/accommodation'))

  const accommodations = computed<Accommodation[]>(() => {
    if (!response.value) return []

    return mapAccommodationData(response.value)
  })

  return {
    accommodations,
    pending,
    error,
    refresh,
  }
}
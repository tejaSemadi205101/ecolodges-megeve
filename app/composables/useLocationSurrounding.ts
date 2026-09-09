import type {
  LocationSurroundingPageData,
  StrapiLocationSurroundingPageResponse,
} from '~/types/location-surrounding'

import { mapLocationSurroundingPage } from '~/mappers/location-surrounding-mapper'

export function useLocationSurrounding() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiLocationSurroundingPageResponse>(
    'location-surrounding',
    () => $fetch('/api/location-surrounding'),
  )

  const locationSurrounding = computed<LocationSurroundingPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapLocationSurroundingPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    locationSurrounding,
    pending,
    error,
    refresh,
  }
}
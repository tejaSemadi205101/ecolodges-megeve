import type {
  RatesPageData,
  StrapiRatesPageResponse,
} from '~/types/rates'

import { mapRatesPage } from '~/mappers/rates-mapper'

export function useRates() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiRatesPageResponse>(
    'rates',
    () => $fetch('/api/rates'),
  )

  const rates = computed<RatesPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapRatesPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    rates,
    pending,
    error,
    refresh,
  }
}
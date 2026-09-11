import type {
  TermsAndConditionsPageData,
  StrapiTermsAndConditionsPageResponse,
} from '~/types/terms-and-conditions'

import { mapTermsAndConditionsPage } from '~/mappers/terms-and-conditions-mapper'

export function useTermsAndConditions() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiTermsAndConditionsPageResponse>(
    'terms-and-conditions',
    () => $fetch('/api/terms-and-conditions'),
  )

  const termsAndConditions = computed<TermsAndConditionsPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapTermsAndConditionsPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    termsAndConditions,
    pending,
    error,
    refresh,
  }
}
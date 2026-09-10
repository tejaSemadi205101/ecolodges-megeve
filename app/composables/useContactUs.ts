import type {
  ContactUsPageData,
  StrapiContactUsPageResponse,
} from '~/types/contact-us'

import { mapContactUsPage } from '~/mappers/contact-us-mapper'

export function useContactUs() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiContactUsPageResponse>(
    'contact-us',
    () => $fetch('/api/contact-us'),
  )

  const contactUs = computed<ContactUsPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapContactUsPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    contactUs,
    pending,
    error,
    refresh,
  }
}
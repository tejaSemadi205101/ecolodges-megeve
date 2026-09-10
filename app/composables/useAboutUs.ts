import type {
  AboutUsPageData,
  StrapiAboutUsPageResponse,
} from '~/types/about-us'

import { mapAboutUsPage } from '~/mappers/about-us-mapper'

export function useAboutUs() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiAboutUsPageResponse>(
    'about-us', () => $fetch('/api/about-us')
  )

  const aboutUs = computed<AboutUsPageData | null>(() => {
    if(!response.value){
      return null
    }

    return mapAboutUsPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    aboutUs,
    pending,
    error,
    refresh,
  }
}
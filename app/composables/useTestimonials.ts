import type {
  StrapiTestimonialsPageResponse,
  TestimonialsPageData,
} from '~/types/testimonials'

import { mapTestimonialsPage } from '~/mappers/testimonials-mapper'

export function useTestimonials() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiTestimonialsPageResponse>(
    'testimonials',
    () => $fetch('/api/testimonials'),
  )

  const testimonials = computed<TestimonialsPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapTestimonialsPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    testimonials,
    pending,
    error,
    refresh,
  }
}
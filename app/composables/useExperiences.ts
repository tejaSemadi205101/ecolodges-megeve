import type {
  Experience,
  ExperiencesPageData,
  StrapiExperiencesPageResponse,
} from '~/types/experiences'

import { mapExperiencesPage } from '~/mappers/experiences-mapper'

export function useExperiences() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiExperiencesPageResponse>(
    'experiences',
    () => $fetch('/api/experiences'),
  )

  const experiences = computed<ExperiencesPageData | null>(() => {
    if (!response.value) {
      return null
    }

    return mapExperiencesPage(
      response.value,
      config.public.strapiBaseUrl,
    )
  })

  return {
    experiences,
    pending,
    error,
    refresh,
  }
}
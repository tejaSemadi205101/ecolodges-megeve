import type {
  Experience,
  StrapiExperiencesResponse,
} from '~/types/experiences'

import { mapExperienceData } from '~/mappers/experiences-mapper'

export function useExperiences() {
  const config = useRuntimeConfig()

  const {
    data: response,
    pending,
    error,
    refresh,
  } = useAsyncData<StrapiExperiencesResponse>(
    'experiences',
    () => $fetch('/api/experiences'),
  )

  const experiences = computed<Experience[]>(() => {
    if (!response.value) {
      return []
    }

    return mapExperienceData(
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
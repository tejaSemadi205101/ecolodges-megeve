import type {
  HomePage,
  StrapiHomeResponse,
} from '~/types/home'

import { mapHomeResponse } from '~/utils/homeMapper'

export const useHome = () => {
  const {
    data: response,
    pending,
    error,
  } = useFetch<StrapiHomeResponse>('/api/home')

  const home = computed<HomePage | null>(() => {
    if (!response.value) {
      return null
    }

    console.log('NUXT RESPONSE:', response.value)

    return mapHomeResponse(response.value)
  })

  return {
    home,
    pending,
    error,
  }
}
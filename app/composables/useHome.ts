import type { StrapiHomeResponse } from '~/types/home'
import { mapHomeData } from '~/mappers/homeMapper'

export function useHome() {
  const config = useRuntimeConfig()

  return useAsyncData('home-page', async () => {
    const res = await $fetch<StrapiHomeResponse>('/api/home')
    return mapHomeData(res, config.public.strapiBaseUrl)
  })
}
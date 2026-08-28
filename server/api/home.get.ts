import type { StrapiHomeResponse } from "~/types/home"

export default defineEventHandler(
  async (): Promise<StrapiHomeResponse> => {
    const config = useRuntimeConfig()

    return await $fetch<StrapiHomeResponse>(
      `${config.strapiUrl}/api/home?populate=*`,
    )
  },
)
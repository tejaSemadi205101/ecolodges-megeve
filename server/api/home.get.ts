import type { StrapiHomeResponse } from "~/types/home"
import qs from "qs"

export default defineEventHandler(
  async (): Promise<StrapiHomeResponse> => {
    const config = useRuntimeConfig()

    const query = qs.stringify(
      {
        populate: {
          Hero: { populate: ["backgroundMedia"] },
          Introduction: { populate: ["media"] },
          FeaturedAccomodation: { populate: "*" },
          Experiences: { populate: "*" },
          Testimonials: { populate: "*" },
          CTASections: { populate: "*" },
        },
      },
      { encodeValuesOnly: true },
    )

    return await $fetch<StrapiHomeResponse>(
      `${config.strapiUrl}/api/home?${query}`,
    )
  },
)   
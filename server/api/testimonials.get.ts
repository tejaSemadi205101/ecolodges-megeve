import qs from 'qs'

import type {
  StrapiTestimonialPage,
  StrapiTestimonialsResponse,
  StrapiTestimonialsPageResponse,
} from '~/types/testimonials'

export default defineEventHandler(
  async (): Promise<StrapiTestimonialsPageResponse> => {
    const config = useRuntimeConfig()

    if (!config.strapiBaseUrl) {
      throw createError({
        statusCode: 500,
        statusMessage: 'NUXT_STRAPI_URL is not configured.',
      })
    }

    const pageQuery = qs.stringify(
      {
        populate: {
          heroSection: {
            populate: {
              backgroundMedia: true
            },
          },
          pageSEO: {
            populate:{
              metaImage: true
            },
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    )

    const testimonialsQuery = qs.stringify(
      {
        populate: {
          guestImage: {
            populate: '*',
          },
          accomodation_item: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    )

    const headers = config.strapiApiToken
      ? {
          Authorization: `Bearer ${config.strapiApiToken}`,
        }
      : undefined

    const [pageResponse, testimonialsResponse] = await Promise.all([
      $fetch<{ data: StrapiTestimonialPage }>(
        `${config.strapiBaseUrl}/api/testimonial-page?${pageQuery}`,
        {
          headers,
        },
      ),

      $fetch<StrapiTestimonialsResponse>(
        `${config.strapiBaseUrl}/api/testimonials-items?${testimonialsQuery}`,
        {
          headers,
        },
      ),
    ])

    return {
      data: {
        heroSection: pageResponse.data.heroSection,
        testimonials: testimonialsResponse.data,
        pageSEO: pageResponse.data.pageSEO,
      },
    }
  },
)
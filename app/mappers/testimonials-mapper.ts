import type {
  Testimonial,
  TestimonialAccommodation,
  TestimonialsPageData,
  StrapiTestimonialItem,
  StrapiTestimonialsPageResponse,
} from '~/types/testimonials'

import { mapMediaAsset } from '~/utils/strapi-media'

import { mapPageSEO } from '~/mappers/seo-mapper'

function mapTestimonialAccommodation(
  accommodation: StrapiTestimonialItem['accomodation_item'],
): TestimonialAccommodation | null {
  if (!accommodation) {
    return null
  }

  return {
    id: accommodation.id,
    documentId: accommodation.documentId,
    propertyName: accommodation.propertyName,
    slug: accommodation.slug,
    accommodationType: accommodation.accommodationType,
    propertyTitle: accommodation.propertyTitle,
  }
}

function mapTestimonial(
  item: StrapiTestimonialItem,
  baseUrl: string,
): Testimonial {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    content: item.content,
    guestName: item.guestName,

    guestImage: mapMediaAsset(
      item.guestImage,
      item.guestName,
      baseUrl,
    ),

    accommodation: mapTestimonialAccommodation(
      item.accomodation_item,
    ),
  }
}

function mapTestimonialsData(
  items: StrapiTestimonialItem[],
  baseUrl: string,
): Testimonial[] {
  return items.map((item) =>
    mapTestimonial(item, baseUrl),
  )
}

export function mapTestimonialsPage(
  response: StrapiTestimonialsPageResponse,
  baseUrl: string,
): TestimonialsPageData {
  return {
    hero: {
      heading: response.data.heroSection.heading,
      bodycopy: response.data.heroSection.bodycopy,

      backgroundMedia: mapMediaAsset(
        response.data.heroSection.backgroundMedia,
        response.data.heroSection.heading,
        baseUrl,
      ),
    },

    testimonials: mapTestimonialsData(
      response.data.testimonials,
      baseUrl,
    ),

    pageSEO: mapPageSEO(
      response.data.pageSEO,
      baseUrl,
    )
  }
}
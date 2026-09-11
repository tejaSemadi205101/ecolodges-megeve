import type { StrapiMedia, MediaAsset } from '~/types/home'
import type { StrapiPageSEO, PageSEO } from './seo'

export interface StrapiTestimonialPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }

  pageSEO: StrapiPageSEO | null
}

export interface StrapiTestimonialAccommodation {
  id: number
  documentId: string
  propertyName: string
  propertySummary: string
  propertyAddress: string
  propertyDescription: string
  guestCapacity: string
  bedroomAmount: string
  bathroomAmount: string
  slug: string
  accommodationType: string
  propertyTitle: string
}

export interface StrapiTestimonialItem {
  id: number
  documentId: string
  title: string
  content: string
  guestName: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  guestImage: StrapiMedia | null

  accomodation_item: StrapiTestimonialAccommodation | null
}

export interface StrapiTestimonialsResponse {
  data: StrapiTestimonialItem[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiTestimonialsPageResponse {
  data: {
    heroSection: StrapiTestimonialPage['heroSection']
    testimonials: StrapiTestimonialItem[]
    pageSEO: StrapiTestimonialPage['pageSEO']
  }
}

export interface TestimonialsHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface TestimonialAccommodation {
  id: number
  documentId: string
  propertyName: string
  slug: string
  accommodationType: string
  propertyTitle: string
}

export interface Testimonial {
  id: number
  documentId: string
  title: string
  content: string
  guestName: string
  guestImage: MediaAsset | null
  accommodation: TestimonialAccommodation | null
}

export interface TestimonialsPageData {
  hero: TestimonialsHero
  testimonials: Testimonial[]
  pageSEO: PageSEO | null
}
import type { StrapiMedia, MediaAsset } from '~/types/home'

export interface StrapiPlacesItemsResponse {
  data: StrapiPlacesItem[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiPlacesItem {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  placesCollection: {
    id: number
    locationList: string
    header: {
      id: number
      heading: string
      bodycopy: string
    }
    image: StrapiMedia | null
  }
}

export interface StrapiLocationSurroundingPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  overviewHeader: {
    id: number
    heading: string
    bodycopy: string
  }

  featuredLocation: {
    id: number
    icon: string | null
    heading: string
    bodycopy: string
  }[]

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }
}

export interface StrapiLocationSurroundingPageResponse {
  data: {
    heroSection: StrapiLocationSurroundingPage['heroSection']
    overviewHeader: StrapiLocationSurroundingPage['overviewHeader']
    featuredLocation: StrapiLocationSurroundingPage['featuredLocation']
    placesItems: StrapiPlacesItem[]
  }
}

export interface LocationSurroundingHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface LocationSurroundingOverview {
  heading: string
  bodycopy: string
}

export interface FeaturedLocation {
  id: number
  icon: string | null
  heading: string
  bodycopy: string
}

export interface PlacesItem {
  id: number
  documentId: string
  header: {
    heading: string
    bodycopy: string
  }
  locations: string[]
  image: MediaAsset | null
}

export interface LocationSurroundingPageData {
  hero: LocationSurroundingHero
  overview: LocationSurroundingOverview
  featuredLocations: FeaturedLocation[]
  places: PlacesItem[]
}
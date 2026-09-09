import type { StrapiMedia, MediaAsset } from "./home"

export interface StrapiAccommodationResponse {
  data: StrapiAccommodation[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiAccommodation {
  id: number
  documentId: string
  propertyName: string
  propertyTitle: string
  slug: string
  accommodationType: string
  propertySummary: string
  propertyAddress: string
  propertyDescription: string
  guestCapacity: string
  bedroomAmount: string
  bathroomAmount: string

  usp: {
    id: number
    heading: string
    bodycopy: string
  }[]

  facilities: {
    signatureFacilities: {
      id: number
      signatureName: string
      icon: string | null
    }[]

    categories: {
      id: number
      categoriesName: string
      categoryItems: string[]
    }[]
  }

  gallery: {
    id: number
    photosCollection: string
  }[]

  seasonRates: Record<string, unknown>[]
}

export interface Accommodation {
  id: number
  documentId: string
  name: string
  title: string
  slug: string
  type: string
  summary: string
  address: string
  description: string
  guestCapacity: number
  bedroomAmount: number
  bathroomAmount: number

  usps: {
    id: number
    heading: string
    bodycopy: string
  }[]

  facilities: {
    signature: {
      id: number
      name: string
      icon: string | null
    }[]

    categories: {
      id: number
      name: string
      items: string[]
    }[]
  }

  gallery: {
    id: number
    collection: string
  }[]

  seasonRates: Record<string, unknown>[]
}

export interface StrapiAccommodationPage {
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

  AccomodationList: {
    id: number
    heading: string
  }

  USP: {
    id: number
    heading: string
    bodycopy: string

    USPItem: {
      id: number
      heading: string
      bodycopy: string
      image: StrapiMedia | null
    }[]
  }
}

export interface StrapiAccommodationPageResponse {
  data: {
    heroSection: StrapiAccommodationPage['heroSection']
    AccomodationList: StrapiAccommodationPage['AccomodationList']
    USP: StrapiAccommodationPage['USP']
    accommodations: StrapiAccommodation[]
  }
}

export interface AccommodationHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface AccommodationListSection {
  heading: string
}

export interface AccommodationUSPItem {
  id: number
  heading: string
  bodycopy: string
  image: MediaAsset | null
}

export interface AccommodationUSP {
  heading: string
  bodycopy: string
  items: AccommodationUSPItem[]
}

export interface AccommodationPageData {
  hero: AccommodationHero
  accommodationList: AccommodationListSection
  usp: AccommodationUSP
  accommodations: Accommodation[]
}
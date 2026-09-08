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
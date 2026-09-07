export interface AccommodationUSP {
  id: number
  heading: string
  bodycopy: string
}

export interface AccommodationFacility {
  id: number
  name: string
  icon: string | null
}

export interface AccommodationFacilityCategory {
  id: number
  name: string
  items: string[]
}

export interface AccommodationFacilities {
  signature: AccommodationFacility[]
  categories: AccommodationFacilityCategory[]
}

export interface AccommodationGallery {
  id: number
  collection: string
}

export interface AccommodationSeasonRate {
  id: number
  [key: string]: unknown
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
  usps: AccommodationUSP[]
  facilities: AccommodationFacilities
  gallery: AccommodationGallery[]
  seasonRates: AccommodationSeasonRate[]
}
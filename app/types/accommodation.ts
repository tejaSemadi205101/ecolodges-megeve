export interface StrapiAccommodation {
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
  accommodationType: string | null
  propertyTitle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Accommodation {
  id: number
  name: string
  title: string
  summary: string
  address: string
  description: string
  guestCapacity: number
  bedrooms: number
  bathrooms: number
  slug: string
  type: string | null
}
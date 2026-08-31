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
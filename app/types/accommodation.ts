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
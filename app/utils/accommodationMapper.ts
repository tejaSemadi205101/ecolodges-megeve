import type { StrapiAccommodation, Accommodation } from '~/types/accommodation'

export function mapAccommodation(
  data: StrapiAccommodation
): Accommodation {
  return {
    id: data.id,
    name: data.propertyName,
    title: data.propertyTitle,
    summary: data.propertySummary,
    address: data.propertyAddress,
    description: data.propertyDescription,
    guestCapacity: Number(data.guestCapacity),
    bedrooms: Number(data.bedroomAmount),
    bathrooms: Number(data.bathroomAmount),
    slug: data.slug,
    type: data.accommodationType,
  }
}
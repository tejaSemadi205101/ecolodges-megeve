import type {
  Accommodation,
  StrapiAccommodation,
  StrapiAccommodationResponse,
} from '~/types/accommodation'

export function mapAccommodation(
  item: StrapiAccommodation,
): Accommodation {
  return {
    id: item.id,
    documentId: item.documentId,
    name: item.propertyName,
    title: item.propertyTitle,
    slug: item.slug,
    type: item.accommodationType,
    summary: item.propertySummary,
    address: item.propertyAddress,
    description: item.propertyDescription,

    guestCapacity: Number(item.guestCapacity),
    bedroomAmount: Number(item.bedroomAmount),
    bathroomAmount: Number(item.bathroomAmount),

    usps: item.usp.map((usp) => ({
      id: usp.id,
      heading: usp.heading,
      bodycopy: usp.bodycopy,
    })),

    facilities: {
      signature: item.facilities.signatureFacilities.map((facility) => ({
        id: facility.id,
        name: facility.signatureName,
        icon: facility.icon,
      })),

      categories: item.facilities.categories.map((category) => ({
        id: category.id,
        name: category.categoriesName,
        items: category.categoryItems,
      })),
    },

    gallery: item.gallery.map((gallery) => ({
      id: gallery.id,
      collection: gallery.photosCollection,
    })),

    seasonRates: item.seasonRates,
  }
}

export function mapAccommodationData(
  response: StrapiAccommodationResponse,
): Accommodation[] {
  return response.data.map(mapAccommodation)
}
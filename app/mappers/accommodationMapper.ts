import type {
  Accommodation,
  AccommodationFacilities,
  AccommodationGallery,
  AccommodationSeasonRate,
  AccommodationUSP,
} from '~/types/accommodation'

interface StrapiAccommodation {
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
  usp?: {
    id: number
    heading: string
    bodycopy: string
  }[]
  facilities?: {
    signatureFacilities?: {
      id: number
      signatureName: string
      icon: string | null
    }[]
    categories?: {
      id: number
      categoriesName: string
      categoryItems?: string[]
    }[]
  }
  gallery?: {
    id: number
    photosCollection: string
  }[]
  seasonRates?: Record<string, unknown>[]
}

export function mapAccommodation(
  item: StrapiAccommodation,
): Accommodation {
  const facilities: AccommodationFacilities = {
    signature:
      item.facilities?.signatureFacilities?.map((facility) => ({
        id: facility.id,
        name: facility.signatureName,
        icon: facility.icon,
      })) ?? [],

    categories:
      item.facilities?.categories?.map((category) => ({
        id: category.id,
        name: category.categoriesName,
        items: category.categoryItems ?? [],
      })) ?? [],
  }

  const usps: AccommodationUSP[] =
    item.usp?.map((item) => ({
      id: item.id,
      heading: item.heading,
      bodycopy: item.bodycopy,
    })) ?? []

  const gallery: AccommodationGallery[] =
    item.gallery?.map((item) => ({
      id: item.id,
      collection: item.photosCollection,
    })) ?? []

  const seasonRates: AccommodationSeasonRate[] =
    item.seasonRates?.map((item, index) => ({
      id: index,
      ...item,
    })) ?? []

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
    usps,
    facilities,
    gallery,
    seasonRates,
  }
}

export function mapAccommodations(
  items: StrapiAccommodation[],
): Accommodation[] {
  return items.map(mapAccommodation)
}
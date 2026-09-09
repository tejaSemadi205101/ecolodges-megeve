import type {
  Accommodation,
  AccommodationPageData,
  StrapiAccommodation,
  StrapiAccommodationResponse,
  StrapiAccommodationPageResponse,
} from '~/types/accommodation'

import type { MediaAsset } from '~/types/home'

import { mapMediaAsset } from '~/utils/strapi-media' 

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

export function mapAccommodationPage(
  response: StrapiAccommodationPageResponse,
  baseUrl: string
): AccommodationPageData {
  return {
    hero: {
      heading: response.data.heroSection.heading,
      bodycopy: response.data.heroSection.bodycopy,
      backgroundMedia: mapMediaAsset(
        response.data.heroSection.backgroundMedia,
        response.data.heroSection.heading,
        baseUrl,
      )
    },

    accommodationList: {
      heading: response.data.AccomodationList.heading,
    },

    usp: {
      heading: response.data.USP.heading,
      bodycopy: response.data.USP.bodycopy,

      items: response.data.USP.USPItem.map((item) =>({
        id: item.id,
        heading: item.heading,
        bodycopy: item.bodycopy,
        image: mapMediaAsset(
          item.image,
          item.heading,
          baseUrl,
        )
      })),
    },

    accommodations: response.data.accommodations.map(
      mapAccommodation
    )
  }
}
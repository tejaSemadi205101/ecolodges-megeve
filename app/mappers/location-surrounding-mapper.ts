import type {
  FeaturedLocation,
  LocationSurroundingPageData,
  StrapiPlacesItem,
  StrapiLocationSurroundingPageResponse,
  PlacesItem,
} from '~/types/location-surrounding'

import { mapMediaAsset } from '~/utils/strapi-media'

function mapPlacesItem(
  item: StrapiPlacesItem,
  baseUrl: string,
): PlacesItem {
  return {
    id: item.id,
    documentId: item.documentId,

    header: {
      heading: item.placesCollection.header.heading,
      bodycopy: item.placesCollection.header.bodycopy,
    },

    locations: item.placesCollection.locationList
      .split('\n')
      .map((location) => location.trim())
      .filter(Boolean),

    image: mapMediaAsset(
      item.placesCollection.image,
      item.placesCollection.header.heading,
      baseUrl,
    ),
  }
}

function mapPlacesData(
  items: StrapiPlacesItem[],
  baseUrl: string,
): PlacesItem[] {
  return items.map((item) => mapPlacesItem(item, baseUrl))
}

function mapFeaturedLocations(
  items: StrapiLocationSurroundingPageResponse['data']['featuredLocation'],
): FeaturedLocation[] {
  return items.map((item) => ({
    id: item.id,
    icon: item.icon,
    heading: item.heading,
    bodycopy: item.bodycopy,
  }))
}

export function mapLocationSurroundingPage(
  response: StrapiLocationSurroundingPageResponse,
  baseUrl: string,
): LocationSurroundingPageData {
  return {
    hero: {
      heading: response.data.heroSection.heading,
      bodycopy: response.data.heroSection.bodycopy,
      backgroundMedia: mapMediaAsset(
        response.data.heroSection.backgroundMedia,
        response.data.heroSection.heading,
        baseUrl,
      ),
    },

    overview: {
      heading: response.data.overviewHeader.heading,
      bodycopy: response.data.overviewHeader.bodycopy,
    },

    featuredLocations: mapFeaturedLocations(
      response.data.featuredLocation,
    ),

    places: mapPlacesData(
      response.data.placesItems,
      baseUrl,
    ),
  }
}
import type {
  Rate,
  RatesPageData,
  RateAccommodation,
  RateSeasonStatus,
  StrapiSeasonRate,
  StrapiRatesPageResponse,
  SeasonalRateInfo,
} from '~/types/rates'

import { mapMediaAsset } from '~/utils/strapi-media'

function mapAccommodation(
  item: StrapiSeasonRate['accomodation_items'][number],
): RateAccommodation {
  return {
    id: item.id,
    documentId: item.documentId,
    propertyName: item.propertyName,
    propertySummary: item.propertySummary,
    propertyAddress: item.propertyAddress,
    propertyDescription: item.propertyDescription,
    guestCapacity: item.guestCapacity,
    bedroomAmount: item.bedroomAmount,
    bathroomAmount: item.bathroomAmount,
    slug: item.slug,
    accommodationType: item.accommodationType,
    propertyTitle: item.propertyTitle,
  }
}

function mapSeasonStatus(
  item: StrapiSeasonRate['season_status'][number],
): RateSeasonStatus {
  return {
    id: item.id,
    documentId: item.documentId,
    statusName: item.statusName,
    icons: item.icons,
    color: item.color,
  }
}

function mapRate(
  item: StrapiSeasonRate,
): Rate {
  return {
    id: item.id,
    documentId: item.documentId,
    seasonName: item.seasonName,
    startDate: item.startDate,
    endDate: item.endDate,
    currency: item.currency,
    nightlyRate: item.nightlyRate,
    weeklyRate: item.weeklyRate,
    twoWeeksRate: item.twoWeeksRate,

    accommodation: item.accomodation_items.map(
      mapAccommodation,
    ),

    seasonStatus: item.season_status.map(
      mapSeasonStatus,
    ),
  }
}

function mapRatesData(
  items: StrapiSeasonRate[],
): Rate[] {
  return items.map(mapRate)
}

function mapSeasonalList(
  items: StrapiRatesPageResponse['data']['seasonalList'],
): SeasonalRateInfo[] {
  return items.map((item) => ({
    id: item.id,
    icon: item.icon,
    heading: item.heading,
    bodycopy: item.bodycopy,
  }))
}

export function mapRatesPage(
  response: StrapiRatesPageResponse,
  baseUrl: string,
): RatesPageData {
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
      heading: response.data.ratesOverview.heading,
      bodycopy: response.data.ratesOverview.bodycopy,
    },

    seasonalList: mapSeasonalList(
      response.data.seasonalList,
    ),

    ratesHeader: {
      heading: response.data.ratesHeader.heading,
      bodycopy: response.data.ratesHeader.bodycopy,
    },

    rates: mapRatesData(
      response.data.rates,
    ),
  }
}
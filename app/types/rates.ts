import type { StrapiMedia, MediaAsset } from '~/types/home'

export interface StrapiRatesPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  ratesOverview: {
    id: number
    heading: string
    bodycopy: string | null
  }

  seasonalList: {
    id: number
    icon: string | null
    heading: string
    bodycopy: string
  }[]

  ratesHeader: {
    id: number
    heading: string
    bodycopy: string | null
  }

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }
}

export interface StrapiSeasonRate {
  id: number
  documentId: string
  seasonName: string
  startDate: string
  endDate: string
  currency: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  nightlyRate: number
  weeklyRate: number
  twoWeeksRate: number

  accomodation_items: {
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
    accommodationType: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    propertyTitle: string
  }[]

  season_status: {
    id: number
    documentId: string
    statusName: string
    icons: string | null
    color: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  }[]
}

export interface StrapiSeasonRatesResponse {
  data: StrapiSeasonRate[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiRatesPageResponse {
  data: {
    heroSection: StrapiRatesPage['heroSection']
    ratesOverview: StrapiRatesPage['ratesOverview']
    seasonalList: StrapiRatesPage['seasonalList']
    ratesHeader: StrapiRatesPage['ratesHeader']
    rates: StrapiSeasonRate[]
  }
}

export interface RatesHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface RatesOverview {
  heading: string
  bodycopy: string | null
}

export interface SeasonalRateInfo {
  id: number
  icon: string | null
  heading: string
  bodycopy: string
}

export interface RatesHeader {
  heading: string
  bodycopy: string | null
}

export interface RateAccommodation {
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
  accommodationType: string
  propertyTitle: string
}

export interface RateSeasonStatus {
  id: number
  documentId: string
  statusName: string
  icons: string | null
  color: string | null
}

export interface Rate {
  id: number
  documentId: string
  seasonName: string
  startDate: string
  endDate: string
  currency: string
  nightlyRate: number
  weeklyRate: number
  twoWeeksRate: number
  accommodation: RateAccommodation[]
  seasonStatus: RateSeasonStatus[]
}

export interface RatesPageData {
  hero: RatesHero
  overview: RatesOverview
  seasonalList: SeasonalRateInfo[]
  ratesHeader: RatesHeader
  rates: Rate[]
}
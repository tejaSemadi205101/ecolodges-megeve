import type { StrapiMedia, MediaAsset } from "./home";

export interface StrapiContactUsPage {
  id: number,
  documentId: string,
  createdAt: string,
  updateAt: string,
  publishedAt: string,

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }

  contactHeader: {
    id: number
    heading: string
    bodycopy: string | null
  }

  contactList: {
    id: number
    linkContact: string | null
    contactData: string
    contactHeading: string
    contactIcon: StrapiMedia | null
    contactCTA: string
  }[]

  locationsHeader: {
    id: number
    heading: string
    bodycopy: string | null
  }

  locationList: {
    id: number
    addressName: string
    address: string
    mapLink: string | null
    locationCTA: string
    embedUrlMap: string | null
  }[]
}

export interface StrapiContactUsPageResponse {
  data: StrapiContactUsPage
  meta: Record<string, unknown>
}

export interface ContactUsHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface ContactHeader {
  heading: string
  bodycopy: string | null
}

export interface ContactItem {
  id: number
  linkContact: string | null
  contactData: string
  contactHeading: string
  contactIcon: MediaAsset | null
  contactCTA: string
}

export interface LocationsHeader {
  heading: string
  bodycopy: string | null
}

export interface LocationItem {
  id: number
  addressName: string
  address: string
  mapLink: string | null
  locationCTA: string
  embedUrlMap: string | null
}

export interface ContactUsPageData {
  hero: ContactUsHero
  contactHeader: ContactHeader
  contacts: ContactItem[]
  locationsHeader: LocationsHeader
  locations: LocationItem[]
}
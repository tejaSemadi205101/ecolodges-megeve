import type { StrapiMedia, MediaAsset } from "./home";

export interface StrapiTermsAndConditionsPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  termList: {
    id: number
    heading: string
    bodycopy: string
  }[]

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }
}

export interface StrapiTermsAndConditionsPageResponse{
  data: StrapiTermsAndConditionsPage
  meta: Record<string, unknown>
}

export interface TermsAndConditionsHero{
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface TermItem {
  id: number
  heading: string
  bodycopy: string
}

export interface TermsAndConditionsPageData  {
  hero: TermsAndConditionsHero
  terms: TermItem[]
}
import type { StrapiMedia, MediaAsset } from "./home";

export interface StrapiAboutUsPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }
  
  companyStats: {
    id: number
    heading: string
    bodycopy: string | null
  }[]

  companyStory: {
    id: number
    eyebrow: string
    heading: string
    bodycopy: string
  }

  propertyGallery: {
    id: number
    photos: StrapiMedia[]
  }[]

  uspSection: {
    id: number
    heading: string
    bodycopy: string
  }

  brandUSPList: {
    id: number
    heading: string
    bodycopy: string
    image: StrapiMedia | null
  }[]
}

export interface StrapiAboutUsPageResponse {
  data: StrapiAboutUsPage
  meta: Record<string, unknown>
}

export interface AboutUsHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface CompanyStats {
  id: number
  heading: string
  bodycopy: string | null
}

export interface CompanyStory {
  eyebrow: string
  heading: string
  bodycopy: string
}

export interface PropertyGalleryItem{
  id: number
  photos: MediaAsset[]
}

export interface AboutUsUSPSection {
  heading: string
  bodycopy: string
}

export interface BrandUSPItem {
  id: number
  heading: string
  bodycopy: string
  image: MediaAsset | null
}

export interface AboutUsPageData {
  hero: AboutUsHero
  companyStats: CompanyStats[]
  companyStory: CompanyStory
  propertyGallery: PropertyGalleryItem[]
  uspSection: AboutUsUSPSection
  brandUSPList: BrandUSPItem[]
}
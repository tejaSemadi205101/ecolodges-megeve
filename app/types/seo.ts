import type { StrapiMedia, MediaAsset } from "./home";

export interface StrapiPageSEO {
  id: number
  metaTitle: string | null
  metaDescription: string | null
  keywords: string | null
  canonicalUrl: string | null
  metaImage: StrapiMedia | null
  noIndex: boolean
  noFollow: boolean
  structuredData: string | null
}

export interface PageSEO {
  metaTitle: string | null
  metaDescription: string | null
  keywords: string | null
  canonicalUrl: string | null
  metaImage: MediaAsset | null
  noIndex: boolean
  noFollow: boolean
  structuredData: string | null
}
export interface StrapiFinalCTAResponse {
  data: {
    id: number
    documentId: string
    finalCTASection: {
      heading: string
      bodycopy: string
      CTACopy: string
      CTAURL: string
      backgroundImage: {
        url: string
        alternativeText: string | null
        width: number
        height: number
      } | null
    }
  }
}

export interface FinalCTASection {
  heading: string
  bodycopy: string
  ctaLabel: string
  ctaUrl: string
  backgroundImage: { url: string; alt: string; width: number; height: number } | null
}
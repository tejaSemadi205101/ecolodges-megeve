import type { StrapiFinalCTAResponse, FinalCTASection } from '~/types/final-cta'
import { resolveStrapiMedia } from '~/utils/strapi-media'

export function mapFinalCTASection(res: StrapiFinalCTAResponse, baseUrl: string): FinalCTASection {
  const s = res.data.finalCTASection
  const img = s.backgroundImage
  return {
    heading: s.heading,
    bodycopy: s.bodycopy,
    ctaLabel: s.CTACopy,
    ctaUrl: s.CTAURL,
    backgroundImage: img
      ? { url: resolveStrapiMedia(img.url, baseUrl), alt: img.alternativeText ?? s.heading, width: img.width, height: img.height }
      : null
  }
}
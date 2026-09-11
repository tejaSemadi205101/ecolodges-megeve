import type { PageSEO, StrapiPageSEO } from "~/types/seo";
import { mapMediaAsset } from "~/utils/strapi-media";

export function mapPageSEO(
  seo: StrapiPageSEO | null,
  baseUrl: string,
): PageSEO | null {
  if (!seo){
    return null
  }

  return {
    metaTitle: seo.metaTitle,
    metaDescription: seo.metaDescription,
    canonicalUrl: seo.canonicalUrl,
    structuredData: seo.structuredData,
    keywords: seo.keywords,
    noIndex: seo.noIndex,
    noFollow: seo.noFollow,
    metaImage: mapMediaAsset(
      seo.metaImage,
      seo.metaTitle ?? 'The Ecolodge Megève',
      baseUrl,
    ),
  }
}
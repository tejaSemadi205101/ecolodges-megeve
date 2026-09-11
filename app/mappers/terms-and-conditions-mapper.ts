import type {
  TermItem,
  TermsAndConditionsPageData,
  StrapiTermsAndConditionsPageResponse,
} from '~/types/terms-and-conditions'

import { mapMediaAsset } from '~/utils/strapi-media'

function mapTermList(
  items: StrapiTermsAndConditionsPageResponse['data']['termList'],
): TermItem[] {
  return items.map((item) => ({
    id: item.id,
    heading: item.heading,
    bodycopy: item.bodycopy,
  }))
}

export function mapTermsAndConditionsPage(
  response: StrapiTermsAndConditionsPageResponse,
  baseUrl: string,
): TermsAndConditionsPageData {
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

    terms: mapTermList(
      response.data.termList,
    ),
  }
}
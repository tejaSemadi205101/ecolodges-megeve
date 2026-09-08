import type { HomePageData, StrapiHomeResponse } from '~/types/home'
import { mapMediaAsset } from '~/utils/strapi-media'

export function mapHomeData(res: StrapiHomeResponse, baseUrl: string): HomePageData {
  const { data } = res

  return {
    hero: {
      heading: data.heroSection.heading,
      bodycopy: data.heroSection.bodycopy,
      backgroundMedia: mapMediaAsset(
        data.heroSection.backgroundMedia,
        data.heroSection.heading,
        baseUrl,
      ),
    },
    introduction: {
      eyebrowHeading: data.introduction.eyebrowHeading,
      heading: data.introduction.heading,
      bodycopy: data.introduction.bodycopy,
      imageSection: mapMediaAsset(
        data.introduction.imageSection,
        data.introduction.heading,
        baseUrl,
      ),
    },
    featuredAccommodation: {
      heading: data.featuredAccomodation.heading,
      bodycopy: data.featuredAccomodation.bodycopy,
    },
    featuredExperiences: {
      heading: data.featuredExperiences.heading,
      bodycopy: data.featuredExperiences.bodycopy,
      ctaCopy: data.featuredExperiences.ctaCopy,
      items: data.featuredExperiences.experienceslisting.map((item) => ({
        id: item.id,
        heading: item.heading,
        photo: mapMediaAsset(item.experiencesPhoto, item.heading, baseUrl),
      })),
    },
  }
}

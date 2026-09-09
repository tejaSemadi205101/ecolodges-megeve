import type {
  Experience,
  StrapiExperiences,
  StrapiExperiencesPageResponse,
  ExperiencesPageData
} from '~/types/experiences'

import type { MediaAsset } from '~/types/home'

import { mapMediaAsset } from '~/utils/strapi-media'

export function mapExperience(
  item: StrapiExperiences,
  baseUrl: string,
): Experience {
  return {
    id: item.id,
    documentId: item.documentId,

    header: {
      heading: item.experienceHeader.heading,
      bodycopy: item.experienceHeader.bodycopy,
    },

    experiences: item.experienceDatas.map((experience) => ({
      id: experience.id,
      name: experience.experienceName,
      icon: experience.experinceIcon,
    })),

    time: {
      bestTime: item.experienceTimes.bestTime,
      atmosphere: item.experienceTimes.atmosphere,
      temperature: item.experienceTimes.temperature,
    },

    images: item.experienceImage
      .map((image) =>
        mapMediaAsset(
          image,
          item.experienceHeader.heading,
          baseUrl,
        ),
      )
      .filter((image): image is MediaAsset => image !== null),
  }
}

export function mapExperienceData(
  items: StrapiExperiences[],
  baseUrl: string,
): Experience[] {
  return items.map((item) =>
    mapExperience(item, baseUrl),
  )
}

export function mapExperiencesPage(
  response: StrapiExperiencesPageResponse,
  baseUrl: string
): ExperiencesPageData {
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

    overview: {
      eyebrowHeading: response.data.overviewSection.eyebrowHeading,
      heading: response.data.overviewSection.heading,
      bodycopy: response.data.overviewSection.bodycopy,
      imageSection: mapMediaAsset(
        response.data.overviewSection.imageSection,
        response.data.overviewSection.heading,
        baseUrl,
      )
    },

    experiences: mapExperienceData(
      response.data.experiencesItems,
      baseUrl,
    )
  }
} 

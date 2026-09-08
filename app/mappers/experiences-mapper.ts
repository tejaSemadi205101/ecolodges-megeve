import type {
  Experience,
  StrapiExperiences,
  StrapiExperiencesResponse,
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
  response: StrapiExperiencesResponse,
  baseUrl: string,
): Experience[] {
  return response.data.map((item) =>
    mapExperience(item, baseUrl),
  )
}
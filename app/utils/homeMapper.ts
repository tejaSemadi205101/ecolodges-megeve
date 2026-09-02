import type {
  HomePage,
  StrapiHomeResponse,
} from '~/types/home'

const STRAPI_URL = 'http://localhost:1337'

const getMediaUrl = (url: string | null): string | null => {
  if (!url) {
    return null
  }

  if (url.startsWith('http')) {
    return url
  }

  return `${STRAPI_URL}${url}`
}

export const mapHomeResponse = (
  response: StrapiHomeResponse,
): HomePage => {
  const { data } = response

  return {
    hero: {
      heading: data.Hero.heading,
      bodycopy: data.Hero.bodycopy,
      backgroundMedia: getMediaUrl(
        data.Hero.backgroundMedia?.url ?? null,
      ),
    },

    introduction: {
      eyebrowCopy: data.Introduction.eyeBrowCopy, 
      heading: data.Introduction.heading,
      bodycopy: data.Introduction.bodycopy,
      media: getMediaUrl(
        data.Introduction.media?.url ?? null,
      ),
      mediaAlt:
        data.Introduction.media?.alternativeText
        ?? data.Introduction.heading,
    },

    featuredAccommodation: {
      heading: data.FeaturedAccomodation.heading,
      bodycopy: data.FeaturedAccomodation.bodycopy,
    },

    experiences: {
      heading: data.Experiences.heading,
      bodycopy: data.Experiences.bodycopy,
      cta: data.Experiences.experienceCTA,
    },

    testimonials: {
      heading: data.Testimonials.heading,
      bodycopy: data.Testimonials.bodycopy,
      cta: data.Testimonials.CTACopy,
    },

    cta: {
      heading: data.CTASections.heading,
      bodycopy: data.CTASections.bodycopy,
      cta: data.CTASections.CTACopy,
      url: data.CTASections.CTAURL,
    },
  }
}
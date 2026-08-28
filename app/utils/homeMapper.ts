import type {
  HomePage,
  StrapiHomeResponse,
} from '~/types/home'

export const mapHomeResponse = (
  response: StrapiHomeResponse,
): HomePage => {
  const { data } = response

  return {
    hero: {
      heading: data.Hero.heading,
      bodycopy: data.Hero.bodycopy,
    },

    introduction: {
      eyebrowcopy: data.Introduction.eyeBrowCopy,
      heading: data.Introduction.heading,
      bodycopy: data.Introduction.bodycopy,
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
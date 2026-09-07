export interface StrapiMediaFormat {
  url: string
  width: number
  height: number
}

export interface StrapiMedia {
  url: string
  alternativeText: string | null
  width: number
  height: number
  formats?: Record<string, StrapiMediaFormat>
}

export interface StrapiHomeResponse {
  data: {
    heroSection: {
      heading: string
      bodycopy: string
      backgroundMedia: StrapiMedia | null
    }
    introduction: {
      eyebrowHeading: string
      heading: string
      bodycopy: string
      imageSection: StrapiMedia | null
    }
    featuredAccomodation: {
      heading: string
      bodycopy: string
    }
    featuredExperiences: {
      heading: string
      bodycopy: string
      ctaCopy: string
      experienceslisting: Array<{
        id: number
        heading: string
        experiencesPhoto: StrapiMedia | null
      }>
    }
  }
}

export interface MediaAsset {
  url: string
  alt: string
  width: number
  height: number
}

export interface HeroSection {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface IntroductionSection {
  eyebrowHeading: string
  heading: string
  bodycopy: string
  imageSection: MediaAsset | null
}

export interface FeaturedAccommodationSection {
  heading: string
  bodycopy: string
}

export interface ExperienceItem {
  id: number
  heading: string
  photo: MediaAsset | null
}

export interface FeaturedExperiencesSection {
  heading: string
  bodycopy: string
  ctaCopy: string
  items: ExperienceItem[]
}

export interface HomePageData {
  hero: HeroSection
  introduction: IntroductionSection
  featuredAccommodation: FeaturedAccommodationSection
  featuredExperiences: FeaturedExperiencesSection
}

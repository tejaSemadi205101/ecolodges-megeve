export interface StrapiHomeResponse {
  data: StrapiHomeData
  meta: Record<string, unknown>
}

export interface StrapiHomeData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  Hero: HeroSection
  Introduction: IntroductionSection
  FeaturedAccomodation: FeaturedAccommodationSection
  Experiences: ExperiencesSection
  Testimonials: TestimonialsSection
  CTASections: CTASection

}

export interface HeroSection {
  id: number
  heading: string
  bodycopy: string
}

export interface IntroductionSection{
  id: number
  eyeBrowCopy: string
  heading: string
  bodycopy: string
}

export interface FeaturedAccommodationSection {
  id: number
  heading: string
  bodycopy: string
}

export interface ExperiencesSection {
  id: number
  heading: string
  bodycopy: string
  experienceCTA: string
}

export interface TestimonialsSection {
  id: number
  heading: string
  bodycopy: string
  CTACopy: string
}

export interface CTASection {
  id: number
  heading: string
  bodycopy: string
  CTACopy: string
  CTAURL: string
}

export interface HomePage {
  hero: {
    heading: string
    bodycopy: string
  }

  introduction: {
    eyebrowcopy: string
    heading: string
    bodycopy: string
  }

  featuredAccommodation: {
    heading: string
    bodycopy: string
  }

  experiences: {
    heading: string
    bodycopy: string
    cta: string
  }

  testimonials: {
    heading: string
    bodycopy: string
    cta: string
  }

  cta: {
    heading: string
    bodycopy: string
    cta: string
    url: string
  }
}


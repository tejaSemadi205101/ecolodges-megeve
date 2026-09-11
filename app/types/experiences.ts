import type { StrapiMedia, MediaAsset } from '~/types/home'
import type { StrapiPageSEO, PageSEO } from './seo'

export interface StrapiExperiencesResponse {
  data: StrapiExperiences[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiExperiences {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  experienceHeader: {
    id: number
    heading: string
    bodycopy: string
  }

  experienceDatas: {
    id: number
    experienceName: string
    experinceIcon: string
  }[]

  experienceTimes: {
    id: number
    bestTime: string
    atmosphere: string
    temperature: string
  }

  experienceImage: StrapiMedia[]
}

export interface Experience {
  id: number
  documentId: string

  header: {
    heading: string
    bodycopy: string
  }

  experiences: {
    id: number
    name: string
    icon: string
  }[]

  time: {
    bestTime: string
    atmosphere: string
    temperature: string
  }

  images: MediaAsset[]
}

export interface StrapiExperiencesPage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string

  heroSection: {
    id: number
    heading: string
    bodycopy: string
    backgroundMedia: StrapiMedia | null
  }

  overviewSection: {
    id: number
    eyebrowHeading: string
    heading: string
    bodycopy: string
    imageSection: StrapiMedia | null
  }

  pageSEO: StrapiPageSEO | null
}

export interface StrapiExperiencesPageResponse {
  data: {
    heroSection: StrapiExperiencesPage['heroSection']
    overviewSection: StrapiExperiencesPage['overviewSection']
    experiencesItems: StrapiExperiences[]
    pageSEO: StrapiExperiencesPage['pageSEO']
  }
}

export interface ExperiencesHero {
  heading: string
  bodycopy: string
  backgroundMedia: MediaAsset | null
}

export interface ExperiencesOverview {
  eyebrowHeading: string
  heading: string
  bodycopy: string
  imageSection: MediaAsset | null
}

export interface ExperiencesPageData {
  hero: ExperiencesHero
  overview: ExperiencesOverview
  experiences: Experience[]
  pageSEO: PageSEO | null
}
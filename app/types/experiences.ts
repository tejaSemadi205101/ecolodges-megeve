import type { StrapiMedia, MediaAsset } from '~/types/home'

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
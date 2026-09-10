import { baseURL } from 'node:process'
import type {
  AboutUsPageData,
  BrandUSPItem,
  CompanyStats,
  PropertyGalleryItem,
  StrapiAboutUsPageResponse,
} from '~/types/about-us'

import type { MediaAsset } from '~/types/home'
import { mapMediaAsset } from '~/utils/strapi-media'

function mapCompanyStats(
  items: StrapiAboutUsPageResponse['data']['companyStats']
): CompanyStats[] {
  return items.map((item) =>({
    id: item.id,
    heading: item.heading,
    bodycopy: item.bodycopy,
  }))
}

function mapCompanyStory(
  item: StrapiAboutUsPageResponse['data']['companyStory']
) {
  return {
    heading: item.heading,
    bodycopy: item.bodycopy,
    eyebrow: item.eyebrow
  }
}

function mapPropertyGallery(
  items: StrapiAboutUsPageResponse['data']['propertyGallery'], 
  baseUrl: string,
): PropertyGalleryItem[]{
  return items.map((item) => ({
    id: item.id,
    photos: item.photos
    .map((photo) => 
      mapMediaAsset(photo,
      'Property gallery image',
      baseUrl,
    ),
  ).filter((photo): photo is MediaAsset => photo !== null)
  }))
}


function mapUSPSection(
  item: StrapiAboutUsPageResponse['data']['uspSection']
){
  return{
    heading: item.heading,
    bodycopy: item.bodycopy,
  }
}

function mapBrandUSPList(
  items: StrapiAboutUsPageResponse['data']['brandUSPList'],
  baseUrl: string,
): BrandUSPItem[] {
  return items.map((item) => ({
    id: item.id,
    heading: item.heading,
    bodycopy: item.bodycopy,
    image: mapMediaAsset(
      item.image,
      item.heading,
      baseUrl,
    )
  }))
}

export function mapAboutUsPage(
  response: StrapiAboutUsPageResponse,
  baseUrl: string,
): AboutUsPageData {
  return {
    hero: {
      heading: response.data.heroSection.heading,
      bodycopy: response.data.heroSection.bodycopy,
      backgroundMedia: mapMediaAsset(
        response.data.heroSection.backgroundMedia,
        response.data.heroSection.heading,
        baseUrl,
      )
    },

    companyStats: mapCompanyStats(
      response.data.companyStats,
    ),

    companyStory: mapCompanyStory(
      response.data.companyStory,
    ),

    uspSection: mapUSPSection(
      response.data.uspSection,
    ),

    propertyGallery: mapPropertyGallery(
      response.data.propertyGallery,
      baseUrl,
    ),

    brandUSPList: mapBrandUSPList(
      response.data.brandUSPList,
      baseUrl,
    )

  }
}


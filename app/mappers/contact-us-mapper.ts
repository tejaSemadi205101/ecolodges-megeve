import type {
  ContactItem,
  ContactUsPageData,
  LocationItem,
  StrapiContactUsPageResponse,
} from '~/types/contact-us'

import { mapMediaAsset } from '~/utils/strapi-media'

function mapContactList(
  items: StrapiContactUsPageResponse['data']['contactList'],
  baseUrl: string,
): ContactItem[] {
  return items.map((item) => ({
    id: item.id,
    linkContact: item.linkContact,
    contactData: item.contactData,
    contactHeading: item.contactHeading,
    contactIcon: mapMediaAsset(
      item.contactIcon,
      item.contactHeading,
      baseUrl,
    ),
    contactCTA: item.contactCTA,
  }))
}

function mapLocationList(
  items: StrapiContactUsPageResponse['data']['locationList'],
): LocationItem[] {
  return items.map((item) => ({
    id: item.id,
    addressName: item.addressName,
    address: item.address.trim(),
    mapLink: item.mapLink,
    locationCTA: item.locationCTA,
    embedUrlMap: item.embedUrlMap,
  }))
}

export function mapContactUsPage(
  response: StrapiContactUsPageResponse,
  baseUrl: string,
): ContactUsPageData {
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

    contactHeader: {
      heading: response.data.contactHeader.heading,
      bodycopy: response.data.contactHeader.bodycopy,
    },

    contacts: mapContactList(
      response.data.contactList,
      baseUrl,
    ),

    locationsHeader: {
      heading: response.data.locationsHeader.heading,
      bodycopy: response.data.locationsHeader.bodycopy,
    },

    locations: mapLocationList(
      response.data.locationList,
    ),
  }
}
export type PageType =
  | 'accommodations'
  | 'about-us'
  | 'experiences'
  | 'rates'
  | 'location-surrounding'
  | 'testimonials'
  | 'contact-us'
  | 'terms-and-conditions'

export type RouteType =
  | 'page'
  | 'accommodation'

export interface PageRegistryItem {
  slug: string
  pageType: PageType
}

export interface ResolvedPageRoute {
  routeType: 'page'
  slug: string
  pageType: PageType
}

export interface ResolvedAccommodationRoute {
  routeType: 'accommodation'
  slug: string
}

export type ResolvedRoute = 
  | ResolvedPageRoute
  | ResolvedAccommodationRoute
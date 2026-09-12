import { pageRegistry } from '~/config/page-registry'

import type {
  ResolvedAccommodationRoute,
  ResolvedPageRoute,
  ResolvedRoute,
} from '~/types/page'

function resolveStaticPage(
  slug: string,
): ResolvedPageRoute | null {
  const page = pageRegistry.find(
    (item) => item.slug === slug,
  )

  if (!page) {
    return null
  }

  return {
    routeType: 'page',
    slug: page.slug,
    pageType: page.pageType,
  }
}

function resolveAccommodationRoute(
  segments: string[],
): ResolvedAccommodationRoute | null {
  const [prefix, slug] = segments

  if (
    prefix !== 'accommodations' ||
    segments.length !== 2 ||
    !slug
  ) {
    return null
  }

  return {
    routeType: 'accommodation',
    slug,
  }
}

export function resolvePageRoute(
  segments: string[],
): ResolvedRoute | null {
  if (segments.length === 1) {
    const slug = segments[0]

    if (!slug) {
      return null
    }

    return resolveStaticPage(slug)
  }

  if (segments.length === 2) {
    return resolveAccommodationRoute(segments)
  }

  return null
}
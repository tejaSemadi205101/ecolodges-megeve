import type { StrapiMedia, MediaAsset } from '~/types/home'

export function resolveStrapiMedia(url: string | null | undefined, baseUrl: string): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${baseUrl}${url}`
}

export function mapMediaAsset(
  media: StrapiMedia | null,
  fallbackAlt: string,
  baseUrl: string
): MediaAsset | null{
  if (!media) return null
  return {
    url: resolveStrapiMedia(media.url, baseUrl),
    alt: media.alternativeText ?? fallbackAlt,
    width: media.width,
    height: media.height
  }
}
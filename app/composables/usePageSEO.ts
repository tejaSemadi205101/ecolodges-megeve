import type { PageSEO } from '~/types/seo'

interface PageSeoFallback {
  title?: string
  description?: string
  image?: string
  canonicalUrl?: string
}

export function usePageSEO(
  seo: MaybeRefOrGetter<PageSEO | null | undefined>,
  fallback: PageSeoFallback = {},
) {
  const seoData = computed(() => toValue(seo))

  const title = computed(
    () =>
      seoData.value?.metaTitle ||
      fallback.title ||
      'The Ecolodge Megève',
  )

  const description = computed(
    () =>
      seoData.value?.metaDescription ||
      fallback.description ||
      '',
  )

  const keywords = computed(
    () => seoData.value?.keywords || undefined,
  )

  const image = computed(
    () =>
      seoData.value?.metaImage?.url ||
      fallback.image ||
      undefined,
  )

  const canonicalUrl = computed(
    () =>
      seoData.value?.canonicalUrl ||
      fallback.canonicalUrl ||
      undefined,
  )

  const robots = computed(() => {
    const noIndex = seoData.value?.noIndex ?? false
    const noFollow = seoData.value?.noFollow ?? false

    return `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
  })

  useSeoMeta({
    title,
    description,

    robots,

    ogTitle: title,
    ogDescription: description,
    ogImage: image,

    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  useHead(() => ({
    meta: keywords.value
      ? [
          {
            name: 'keywords',
            content: keywords.value,
          },
        ]
      : [],

    link: canonicalUrl.value
      ? [
          {
            rel: 'canonical',
            href: canonicalUrl.value,
          },
        ]
      : [],
  }))
}
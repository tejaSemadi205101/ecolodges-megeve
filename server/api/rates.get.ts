import qs from 'qs'

import type {
  StrapiRatesPage,
  StrapiSeasonRatesResponse,
  StrapiRatesPageResponse,
} from '~/types/rates'

export default defineEventHandler( async (): Promise<StrapiRatesPageResponse> => {
  const config = useRuntimeConfig()

  if(!config.strapiBaseUrl){
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_STRAPI_URL is not configured'
    })
  }

  const pageQuery = qs.stringify(
    {
      populate: {
        heroSection: {
          populate: {
            backgroundMedia: true,
          },
        },
        ratesOverview: true,
        seasonalList: true,
        ratesHeader: true,
      },
    },
    {
      encodeValuesOnly: true
    }
  )

  const ratesQuery = qs.stringify(
    {
      populate: {
        accomodation_items: true,
        season_status: true,
      },
    },
    {
      encodeValuesOnly: true
    }
  )

  const headers = config.strapiApiToken
  ? {
    Authorization: `Bearer ${config.strapiApiToken}`
  }
  : undefined

  const [pageResponse, ratesResponse] = await Promise.all([
    $fetch<{data: StrapiRatesPage}>(
      `${config.strapiBaseUrl}/api/rates-property?${pageQuery}`,
      {
        headers
      }
    ),

    $fetch<StrapiSeasonRatesResponse>(
      `${config.strapiBaseUrl}/api/season-rates?${ratesQuery}`,
      {
        headers
      }
    )
  ])

  return {
    data: {
      heroSection: pageResponse.data.heroSection,
      ratesOverview: pageResponse.data.ratesOverview,
      seasonalList: pageResponse.data.seasonalList,
      ratesHeader: pageResponse.data.ratesHeader,
      rates: ratesResponse.data,
    } 
  }
})
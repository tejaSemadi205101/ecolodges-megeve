import { resolvePageRoute } from '~/utils/page-resolver'

export default defineEventHandler((event) => {
  const slugParam = getRouterParam(event, 'slug')

  if (!slugParam) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page route not found',
    })
  }

  const segments = slugParam.split('/').filter(Boolean)

  const resolvedRoute = resolvePageRoute(segments)

  if (!resolvedRoute) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page route not found',
    })
  }

  return {
    data: resolvedRoute,
  }
})
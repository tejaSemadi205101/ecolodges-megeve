<script setup lang="ts">
import { resolvePageRoute } from '~/utils/page-resolver'

const route = useRoute()

const segments = computed<string[]>(() => {
  return route.path
    .replace(/^\/+|\/+$/g, '')
    .split('/')
    .filter(Boolean)
})

const resolvedRoute = computed(() => {
  return resolvePageRoute(segments.value)
})

if (!resolvedRoute.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}
</script>

<template>
  <main>
    <h1>Dynamic Route</h1>

    <p>Path: {{ route.path }}</p>
    <p>Segments: {{ segments.join(' / ') }}</p>

    <pre>{{ resolvedRoute }}</pre>
  </main>
</template>
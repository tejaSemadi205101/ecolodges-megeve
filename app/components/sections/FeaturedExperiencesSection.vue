<script setup lang="ts">
import type { FeaturedExperiencesSection as FeaturedExperiencesSectionData } from '~/types/home'

defineProps<{
  data: FeaturedExperiencesSectionData
}>()
</script>

<template>
  <section
    aria-labelledby="featured-experiences-title"
    class="bg-stone-900 px-6 py-16 md:px-12 md:py-24"
  >
    <div class="mx-auto max-w-7xl">
      <header class="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <h2
          id="featured-experiences-title"
          class="font-['Libre_Baskerville'] text-2xl font-semibold leading-8 text-white md:text-3xl md:leading-10"
        >
          {{ data.heading }}
        </h2>

        <div class="flex flex-col items-start gap-6">
          <p class="text-sm font-normal leading-6 text-stone-200">
            {{ data.bodycopy }}
          </p>

          <span
            v-if="data.ctaCopy"
            class="text-sm font-semibold text-white"
          >
            {{ data.ctaCopy }}
          </span>
        </div>
      </header>

      <div
        v-if="data.items.length"
        class="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
      >
        <article
          v-for="item in data.items"
          :key="item.id"
          class="overflow-hidden rounded-sm bg-white"
        >
          <img
            v-if="item.photo"
            :src="item.photo.url"
            :alt="item.photo.alt"
            :width="item.photo.width"
            :height="item.photo.height"
            loading="lazy"
            decoding="async"
            class="aspect-16/9 w-full object-cover"
          >

          <div class="p-5">
            <h3 class="font-['Libre_Baskerville'] text-xl font-semibold text-color-text-neutral-primary">
              {{ item.heading }}
            </h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

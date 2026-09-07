<script setup lang="ts">
import type { MediaAsset } from '~/types/home'

interface Props {
  eyebrow: string
  title: string
  description: string
  image: MediaAsset | null
}

defineProps<Props>()
</script>

<template>
  <section aria-labelledby="overview-heading" class="bg-white px-6 py-16 md:px-12 md:py-24">
    <div class="mx-auto flex max-w-7xl flex-col gap-8">
      <div class="grid gap-6 lg:grid-cols-[20rem_1fr] lg:gap-10">
        <p
          class="text-sm font-semibold uppercase tracking-wide text-color-text-neutral-primary"
        >
          {{ eyebrow }}
        </p>

        <div class="flex flex-col gap-4">
          <h2
            class="font-['Libre_Baskerville'] text-2xl font-semibold leading-8 text-color-text-neutral-primary md:text-3xl md:leading-10"
          >
            {{ title }}
          </h2>

          <p
            class="text-sm font-normal leading-6 text-color-text-neutral-secondary"
          >
            {{ description }}
          </p>
        </div>
      </div>

      <figure v-if="image">
        <img
          :src="image.url"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          loading="lazy"
          decoding="async"
          class="h-auto w-full rounded-sm object-cover"
        />
      </figure>
    </div>
  </section>
</template>

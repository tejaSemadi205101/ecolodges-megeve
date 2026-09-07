<script setup lang="ts">
import type { FinalCTASection } from '~/types/final-cta'

defineProps<{
  data: FinalCTASection
}>()
</script>

<template>
  <section
    aria-labelledby="final-cta-title"
    class="relative isolate min-h-122 overflow-hidden px-6 py-24"
  >
    <!-- Background image -->
    <NuxtImg
      v-if="data.backgroundImage"
      :src="data.backgroundImage.url"
      :alt="data.backgroundImage.alt"
      class="absolute inset-0 -z-20 size-full object-cover"
    />

    <!-- Overlay -->
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 bg-black/60"
    />

    <!-- Content -->
    <div
      class="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
    >
      <div class="flex flex-col items-center gap-2">
        <h2
          id="final-cta-title"
          class="font-['Libre_Baskerville'] text-3xl font-semibold leading-10 text-color-text-inverse"
        >
          {{ data.heading }}
        </h2>

        <p
          class="font-['Inter'] text-sm font-medium leading-5 text-color-text-inverse"
        >
          {{ data.bodycopy }}
        </p>
      </div>

      <NuxtLink
        :to="data.ctaUrl"
        class="inline-flex h-10 items-center justify-center gap-2.5 rounded-sm border border-color-border-neutral-inverse bg-color-neutral-0 px-6 py-2.5 text-sm font-semibold text-color-text-neutral-primary transition-colors hover:bg-color-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-border-neutral-inverse"
      >
        {{ data.ctaLabel }}
      </NuxtLink>
    </div>
  </section>
</template>
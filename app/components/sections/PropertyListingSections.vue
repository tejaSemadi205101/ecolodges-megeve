<script setup lang="ts">
  interface Props {
    heading: string
    bodycopy: string
  }

  defineProps<Props>()
</script>

<template> 
  <section
    aria-labelledby="property-listing-title"
    class="bg-white px-6 py-16 md:px-12 md:py-24"
  >
    <div class="mx-auto max-w-7xl">
      <header class="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <h2
          id="property-listing-title"
          class="font-['Libre_Baskerville'] text-2xl font-semibold leading-8 text-color-text-neutral-primary md:text-3xl md:leading-10"
        >
          {{  heading }}
        </h2>

        <p
          class="text-sm font-normal leading-6 text-color-text-neutral-secondary"
        >
          {{ bodycopy }}
        </p>
      </header>
    </div>
  </section>
</template>

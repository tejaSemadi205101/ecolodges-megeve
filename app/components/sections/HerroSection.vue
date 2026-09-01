<script setup lang="ts">

interface HeroSectionProps {
  heading: string
  bodycopy: string
  backgroundMedia: string | null
}

defineProps<HeroSectionProps>()

</script>

<template>

  <section
    aria-labelledby="hero-heading"
    class="relative min-h-100 overflow-hidden"
  >

    
    <div
      aria-hidden="true"
      class="absolute inset-0"
    >
      <img
        v-if="backgroundMedia"
        :src="backgroundMedia"
        alt=""
        class="h-full w-full object-cover object-center"
      />
    </div>

    
    <div
      class="relative z-10 flex min-h-screen items-end"
    >

      <div
        class="w-full px-12 pb-12"
      >

        <div
          class="grid gap-12 lg:grid-cols-[511px_1fr] lg:items-end"
        >

          <h1
            id="hero-heading"
            class="font-['Libre_Baskerville'] text-4xl font-medium leading-[50px] text-white"
          >
            {{ heading }}
          </h1>

          <p
            class="font-['Inter'] text-base font-normal leading-6 text-white"
          >
            {{ bodycopy }}
          </p>

        </div>

      </div>

    </div>

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-stone-900/0 to-stone-900"
    />

  </section>

</template>
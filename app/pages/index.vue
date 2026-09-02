<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppNavbar from '~/components/layouts/AppNavbar.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import OverviewSection from '~/components/sections/OverviewSection.vue'
import PropertyListingSections from '~/components/sections/PropertyListingSections.vue'

const { home, pending, error } = useHome()
</script>

<template>
  <AppNavbar />

  <main>
    <p v-if="pending" role="status">
      Loading...
    </p>

    <p v-else-if="error" role="alert">
      Failed to load homepage.
    </p>

    <template v-else-if="home">
      <HeroSection
        :heading="home.hero.heading"
        :bodycopy="home.hero.bodycopy"
        :background-media="home.hero.backgroundMedia"
      />

      <OverviewSection
        :eyebrow="home.introduction.eyebrowCopy"
        :title="home.introduction.heading"
        :description="home.introduction.bodycopy"
        :image="home.introduction.media"
        :image-alt="home.introduction.mediaAlt"
      />

      <PropertyListingSections 
        :heading="home.featuredAccommodation.heading"
        :bodycopy="home.featuredAccommodation.bodycopy"
      />
    </template>
  </main>

  <AppFooter />
</template>
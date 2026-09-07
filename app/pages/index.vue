<script setup lang="ts">
import AppNavbar from '~/components/layouts/AppNavbar.vue'
import AppFooter from '~/components/layouts/AppFooter.vue'
import FinalCTASection from '~/components/sections/CTASection.vue'

const { data: home } = await useHome()
const { data: finalCTA } = await useFinalCTA()
</script>

<template>
  <AppNavbar />
  <main>
    <template v-if="home">
      <HeroSection
        :heading="home.hero.heading"
        :bodycopy="home.hero.bodycopy"
        :background-media="home.hero.backgroundMedia"
      />

      <OverviewSection
        :eyebrow="home.introduction.eyebrowHeading"
        :title="home.introduction.heading"
        :description="home.introduction.bodycopy"
        :image="home.introduction.imageSection"
      />

      <FeaturedPropertySection
        :heading="home.featuredAccommodation.heading"
        :bodycopy="home.featuredAccommodation.bodycopy"
      />

      <FeaturedExperiencesSection :data="home.featuredExperiences" />
    </template>

    <FinalCTASection v-if="finalCTA" :data="finalCTA" />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppNavbar from '~/components/layouts/AppNavbar.vue'
import HeroSection from '~/components/sections/HerroSection.vue'

const {
  home,
  pending,
  error,
} = useHome()
</script>

<template>
  <AppNavbar />

  <main>
    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      Failed to load homepage.
    </div>

    <HerroSection
      v-else-if="home?.hero"
      :heading="home.hero.heading"
      :bodycopy="home.hero.bodycopy"
      :background-media="home.hero.backgroundMedia"
    />
  </main>

  <AppFooter />
</template>
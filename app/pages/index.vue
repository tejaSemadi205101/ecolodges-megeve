<script setup lang="ts">
const {
  home,
  pending,
  error,
} = await useHome()
</script>

<template>
  <main>
    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      Failed to load homepage.
    </div>

    <div v-else-if="home">
      <h1>{{ home.hero.heading }}</h1>

      <p>{{ home.hero.bodycopy }}</p>

      <hr>

      <p>{{ home.introduction.eyebrowcopy }}</p>

      <h2>{{ home.introduction.heading }}</h2>

      <p>{{ home.introduction.bodycopy }}</p>
    </div>
  </main>
</template>
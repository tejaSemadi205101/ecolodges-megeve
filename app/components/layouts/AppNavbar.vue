
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isNavbarHovered = ref(false)

const navigationLinks = [
  {
    label: 'Accommodation',
    href: '/accommodation',
  },
  {
    label: 'Experiences',
    href: '/experiences',
  },
  {
    label: 'Location',
    href: '/location',
  },
  {
    label: 'Rates',
    href: '/rates',
  },
  {
    label: 'Promotion',
    href: '/promotion',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const openMenu = () => {
  isMenuOpen.value = true
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(isMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)

  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="[
      isScrolled || isNavbarHovered
        ? 'bg-white text-color-text-neutral-primary shadow-sm'
        : 'bg-transparent text-white',
    ]"
    @mouseenter="isNavbarHovered = true"
    @mouseleave="isNavbarHovered = false"
  >
    <!-- Navbar -->
    <div
      class="mx-auto flex h-16 w-full max-w-324 items-center justify-between px-6 md:px-12"
    >
      <!-- Menu -->
      <button
        type="button"
        class="group flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4"
        :class="
          isScrolled || isNavbarHovered
            ? 'focus-visible:outline-color-sage-900'
            : 'focus-visible:outline-white'
        "
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation-drawer"
        aria-label="Open navigation menu"
        @click="toggleMenu"
        @keydown="handleKeydown"
      >
        <!-- Hamburger -->
        <span
          class="flex w-7 flex-col gap-1.5"
          aria-hidden="true"
        >
          <span
            class="h-0.5 w-7 transition-all duration-200"
            :class="[
              isScrolled || isNavbarHovered
                ? 'bg-stone-900'
                : 'bg-white',
              isMenuOpen
                ? 'translate-y-2 rotate-45'
                : '',
            ]"
          />

          <span
            class="h-0.5 w-7 transition-all duration-200"
            :class="[
              isScrolled || isNavbarHovered
                ? 'bg-stone-900'
                : 'bg-white',
              isMenuOpen
                ? 'opacity-0'
                : '',
            ]"
          />

          <span
            class="h-0.5 w-7 transition-all duration-200"
            :class="[
              isScrolled || isNavbarHovered
                ? 'bg-stone-900'
                : 'bg-white',
              isMenuOpen
                ? '-translate-y-2 -rotate-45'
                : '',
            ]"
          />
        </span>

        <span
          class="font-sans text-sm font-medium tracking-wide transition-colors duration-200"
        >
          MENU
        </span>
      </button>

      <!-- Logo -->
      <NuxtLink
        to="/"
        aria-label="The Ecolodges Megève"
        class="absolute left-1/2 -translate-x-1/2"
      >
        <img
          :src="
            isScrolled
            ? '/images/megeve-dark-logo.png'
            : '/images/megeve-light-logo.png'
            "
          alt="The Ecolodges Megève"
          class="h-10 w-auto"
        />
      </NuxtLink>

      <!-- Book Now -->
      <NuxtLink
        to="/booking"
        class="inline-flex h-10 items-center justify-center rounded-xs border px-3 py-2.5 font-sans text-sm font-semibold leading-5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
        :class="
          isScrolled || isNavbarHovered
            ? 'border-color-border-megeve-default bg-color-button-primary-megeve-default text-color-button-primary-text hover:bg-color-button-primary-megeve-hover focus-visible:outline-color-sage-900'
            : 'border-white bg-white text-color-text-neutral-primary hover:bg-white/90 focus-visible:outline-white'
        "
      >
        Book Now
      </NuxtLink>
    </div>

    <!-- Navbar border -->
    <div
      class="mx-auto h-px w-[calc(100%-3rem)] transition-colors duration-300 md:w-[calc(100%-6rem)]"
      :class="
        isScrolled || isNavbarHovered
          ? 'bg-color-border-neutral-default'
          : 'bg-white/40'
      "
      aria-hidden="true"
    />

    <!-- Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="isMenuOpen"
        type="button"
        class="fixed inset-0 z-40 bg-black/30"
        aria-label="Close navigation menu"
        @click="closeMenu"
      />
    </Transition>

    <!-- Navigation Drawer -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-250 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="isMenuOpen"
        id="main-navigation-drawer"
        class="fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col bg-white text-color-text-neutral-primary shadow-xl"
        aria-label="Main navigation"
        @keydown.esc="closeMenu"
      >
        <!-- Drawer Header -->
        <div
          class="flex h-16 shrink-0 items-center justify-between border-b border-color-border-neutral-default px-6 md:px-8"
        >
          <span
            class="font-heading text-base font-medium text-color-sage-900"
          >
            Menu
          </span>

          <button
            type="button"
            class="flex size-10 items-center justify-center rounded-full text-stone-900 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-sage-900"
            aria-label="Close navigation menu"
            @click="closeMenu"
          >
            <span
              class="relative block size-5"
              aria-hidden="true"
            >
              <span
                class="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-stone-900"
              />
              <span
                class="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-stone-900"
              />
            </span>
          </button>
        </div>

        <!-- Navigation -->
        <nav
          class="flex-1 overflow-y-auto px-6 py-8 md:px-8"
          aria-label="Primary navigation"
        >
          <ul class="flex flex-col">
            <li
              v-for="link in navigationLinks"
              :key="link.href"
              class="border-b border-color-border-neutral-default"
            >
              <NuxtLink
                :to="link.href"
                class="flex items-center justify-between py-5 font-heading text-lg text-color-sage-900 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-sage-900"
                @click="closeMenu"
              >
                <span>{{ link.label }}</span>

                <span
                  class="font-sans text-sm"
                  aria-hidden="true"
                >
                  →
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Drawer Footer -->
        <div
          class="shrink-0 border-t border-color-border-neutral-default px-6 py-6 md:px-8"
        >
          <NuxtLink
            to="/booking"
            class="flex h-11 w-full items-center justify-center rounded-xs bg-color-button-primary-megeve-default px-4 py-2.5 font-sans text-sm font-semibold text-color-button-primary-text transition-colors hover:bg-color-button-primary-megeve-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-sage-900"
            @click="closeMenu"
          >
            Book Now
          </NuxtLink>
        </div>
      </aside>
    </Transition>
  </header>
</template>
```

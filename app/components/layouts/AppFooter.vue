<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

interface Language {
  code: string
  label: string
  native: string
}

interface Currency {
  code: string
  label: string
  symbol: string
}

const accommodationLinks = [
  {
    label: 'Chalet Les Meuniers',
    href: '/accommodation/chalet-les-meuniers',
  },
  {
    label: 'Flats Les Meuniers',
    href: '/accommodation/flats-les-meuniers',
  },
]

const experienceLinks = [
  {
    label: 'Curated Activities',
    href: '/experiences',
  },
  {
    label: 'Location & Surrounding',
    href: '/location',
  },
]

const resourceLinks = [
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
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
  },
  {
    label: 'Facebook',
    href: '#',
  },
  {
    label: 'LinkedIn',
    href: '#',
  },
  {
    label: 'Pinterest',
    href: '#',
  },
]

const languages: Language[] = [
  {
    code: 'en',
    label: 'English',
    native: 'English',
  },
  {
    code: 'fr',
    label: 'French',
    native: 'Français',
  },
  {
    code: 'de',
    label: 'German',
    native: 'Deutsch',
  },
  {
    code: 'nl',
    label: 'Dutch',
    native: 'Nederlands',
  },
]

const currencies: Currency[] = [
  {
    code: 'USD',
    label: 'USD ($)',
    symbol: '$',
  },
  {
    code: 'EUR',
    label: 'EUR (€)',
    symbol: '€',
  },
  {
    code: 'GBP',
    label: 'GBP (£)',
    symbol: '£',
  },
  {
    code: 'CHF',
    label: 'CHF',
    symbol: 'CHF',
  },
]

const selectedLanguage = ref<Language>({
  code: 'en',
  label: 'English',
  native: 'English',
})

const selectedCurrency = ref<Currency>({
  code: 'USD',
  label: 'USD ($)',
  symbol: '$',
})

const selectLanguage = (language: Language) => {
  selectedLanguage.value = language
}

const selectCurrency = (currency: Currency) => {
  selectedCurrency.value = currency
}
</script>

<template>
  <footer
    class="bg-sage-900 text-text-inverse"
    aria-label="The Ecolodges Megève footer"
  >
    <!-- Main footer -->
    <div
      class="mx-auto flex w-full max-w-324 flex-col gap-12 px-6 py-10 md:px-12 lg:flex-row lg:justify-between lg:gap-24"
    >
      <!-- Navigation -->
      <nav
        class="grid grid-cols-1 gap-8 sm:grid-cols-3"
        aria-label="Footer navigation"
      >
        <!-- Accommodations -->
        <section>
          <h2
            class="font-heading text-base font-medium text-text-inverse"
          >
            The Accommodation
          </h2>

          <ul class="mt-4 flex flex-col gap-2">
            <li
              v-for="link in accommodationLinks"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="block py-2.5 font-sans text-sm leading-5 text-text-inverse-muted transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>

        <!-- Experiences -->
        <section>
          <h2
            class="font-heading text-base font-medium text-text-inverse"
          >
            Experiences
          </h2>

          <ul class="mt-4 flex flex-col gap-2">
            <li
              v-for="link in experienceLinks"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="block py-2.5 font-sans text-sm leading-5 text-text-inverse-muted transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>

        <!-- Resources -->
        <section>
          <h2
            class="font-heading text-base font-medium text-text-inverse"
          >
            Resources
          </h2>

          <ul class="mt-4 flex flex-col gap-2">
            <li
              v-for="link in resourceLinks"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="block py-2.5 font-sans text-sm leading-5 text-text-inverse-muted transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </nav>

      <!-- Property information -->
      <div class="flex w-full max-w-md flex-col gap-8">
        <!-- Language and currency -->
        <div class="flex items-center gap-3.5">
          <!-- Language -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button
                type="button"
                class="flex items-center gap-1.5 border-b border-border-neutral-inverse px-1 pb-1 font-sans text-sm font-medium text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Select language"
              >
                <span>{{ selectedLanguage.native }}</span>

                <svg
                  class="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              class="w-40"
              align="end"
              :side-offset="5"
            >
              <DropdownMenuItem
                v-for="language in languages"
                :key="language.code"
                class="flex items-center justify-between"
                @click="selectLanguage(language)"
              >
                <span>{{ language.native }}</span>

                <span
                  v-if="selectedLanguage.code === language.code"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Divider -->
          <span
            class="h-6 w-px bg-border-neutral-inverse"
            aria-hidden="true"
          />

          <!-- Currency -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button
                type="button"
                class="flex items-center gap-1.5 border-b border-border-neutral-inverse px-1 pb-1 font-sans text-sm font-medium text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Select currency"
              >
                <span>{{ selectedCurrency.code }}</span>

                <svg
                  class="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              class="w-40"
              align="end"
              :side-offset="5"
            >
              <DropdownMenuItem
                v-for="currency in currencies"
                :key="currency.code"
                class="flex items-center justify-between"
                @click="selectCurrency(currency)"
              >
                <span>{{ currency.label }}</span>

                <span
                  v-if="selectedCurrency.code === currency.code"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <!-- Properties -->
        <address class="not-italic">
          <ul class="flex flex-col gap-8">
            <li>
              <h2
                class="font-sans text-base font-semibold text-text-inverse"
              >
                Chalet Les Meuniers Megève
              </h2>

              <p
                class="mt-1 font-sans text-sm leading-6 text-text-inverse-muted"
              >
                990 Rte du Planay, 74120 Megève, France
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=990+Rte+du+Planay+74120+Megève+France"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-3 inline-flex items-center gap-1 rounded-xs bg-button-primary-megeve-hover px-3 py-2 font-sans text-sm font-semibold leading-6 text-button-primary-text transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get direction
              </a>
            </li>

            <li>
              <h2
                class="font-sans text-base font-semibold text-text-inverse"
              >
                Flats Les Meuniers Megève
              </h2>

              <p
                class="mt-1 font-sans text-sm leading-6 text-text-inverse-muted"
              >
                266 Chem. du Golf, 74120 Megève, France
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=266+Chem+du+Golf+74120+Megève+France"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-3 inline-flex items-center gap-1 rounded-xs bg-button-primary-megeve-hover px-3 py-2 font-sans text-sm font-semibold leading-6 text-button-primary-text transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get direction
              </a>
            </li>
          </ul>
        </address>
      </div>
    </div>

    <!-- Brand wordmark -->
    <div
      class="mx-auto w-full max-w-324 px-6 py-10 md:px-12"
      aria-hidden="true"
    >
      <p
        class="overflow-hidden text-center font-display text-[clamp(4rem,14vw,11.9rem)] font-semibold leading-none tracking-[0.08em] text-text-inverse"
      >
        MEGEVE
      </p>
    </div>

    <!-- Footer bottom -->
    <div
      class="border-t border-border-megeve-default"
    >
      <div
        class="mx-auto flex w-full max-w-324 flex-col gap-4 px-6 py-4 md:px-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Social links -->
        <nav aria-label="Social media">
          <ul class="flex items-center gap-2">
            <li
              v-for="social in socialLinks"
              :key="social.label"
            >
              <a
                :href="social.href"
                :aria-label="social.label"
                class="flex size-10 items-center justify-center rounded-full p-2 text-text-inverse transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span class="sr-only">
                  {{ social.label }}
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Copyright -->
        <p
          class="font-sans text-sm text-text-inverse-muted"
        >
          © 2026 The Ecolodges Megeve. All rights reserved.
        </p>

        <!-- Legal -->
        <NuxtLink
          to="/terms-and-conditions"
          class="font-sans text-sm text-text-inverse-muted underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Terms & Conditions
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
```

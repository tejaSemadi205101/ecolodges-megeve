<script setup lang="ts">
interface Property {
  name: string
  description: string
  image: string
  imageAlt: string
  guests: number
  bedrooms: number
  bathrooms: number
  price: string
  pricePeriod: string
  href: string
}

interface Props {
  property: Property
  imagePosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'left',
})

const contentOrder = computed(() =>
  props.imagePosition === 'left'
    ? 'lg:order-2'
    : 'lg:order-1',
)

const imageOrder = computed(() =>
  props.imagePosition === 'left'
    ? 'lg:order-1'
    : 'lg:order-2',
)
</script>

<template>
  <article
    class="grid items-center gap-10 lg:grid-cols-2"
  >
    <!-- Property Image -->
    <figure :class="imageOrder">
      <img
        :src="property.image"
        :alt="property.imageAlt"
        width="516"
        height="354"
        loading="lazy"
        decoding="async"
        class="h-auto w-full rounded-md object-cover"
      />

      <figcaption class="sr-only">
        {{ property.imageAlt }}
      </figcaption>
    </figure>

    <!-- Property Content -->
    <div
      :class="contentOrder"
      class="flex flex-col items-start gap-8"
    >
      <div class="flex w-full flex-col gap-6">
        <!-- Property Information -->
        <header class="flex flex-col gap-2">
          <h3
            class="font-['Libre_Baskerville'] text-2xl font-semibold text-color-text-neutral-primary"
          >
            {{ property.name }}
          </h3>

          <p
            class="line-clamp-2 text-sm font-normal leading-5 text-color-text-neutral-secondary"
          >
            {{ property.description }}
          </p>
        </header>

        <!-- Property Details -->
        <dl
          class="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <div class="flex items-center gap-2">
            <dt class="sr-only">
              Guests
            </dt>

            <dd
              class="text-sm font-medium leading-5 text-color-text-neutral-secondary"
            >
              {{ property.guests }} People
            </dd>
          </div>

          <span
            aria-hidden="true"
            class="text-color-button-primary-label-disabled"
          >
            •
          </span>

          <div class="flex items-center gap-2">
            <dt class="sr-only">
              Bedrooms
            </dt>

            <dd
              class="text-sm font-medium leading-5 text-color-text-neutral-secondary"
            >
              {{ property.bedrooms }} Bedroom{{ property.bedrooms > 1 ? 's' : '' }}
            </dd>
          </div>

          <span
            aria-hidden="true"
            class="text-color-button-primary-label-disabled"
          >
            •
          </span>

          <div class="flex items-center gap-2">
            <dt class="sr-only">
              Bathrooms
            </dt>

            <dd
              class="text-sm font-medium leading-5 text-color-text-neutral-secondary"
            >
              {{ property.bathrooms }} Bathroom{{ property.bathrooms > 1 ? 's' : '' }}
            </dd>
          </div>
        </dl>

        <!-- Property Price -->
        <p class="flex items-center gap-2">
          <span
            class="text-xl font-semibold text-color-text-neutral-primary underline"
          >
            {{ property.price }}
          </span>

          <span
            class="text-sm font-medium leading-5 text-color-text-neutral-secondary"
          >
            {{ property.pricePeriod }}
          </span>
        </p>
      </div>

      <!-- Property CTA -->
      <NuxtLink
        :to="property.href"
        class="inline-flex h-10 items-center justify-center gap-2.5 rounded-xs bg-color-button-primary-megeve-default px-6 py-2.5 text-sm font-semibold text-white outline outline-1 -outline-offset-0.5 outline-color-border-megeve-default transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span>See Detail &amp; Book</span>

        <span
          aria-hidden="true"
          class="text-base leading-none"
        >
          →
        </span>
      </NuxtLink>
    </div>
  </article>
</template>
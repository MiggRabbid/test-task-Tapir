<script setup lang="ts">
import { usePriceFormatter } from '@app/composables/usePriceFormatter';

import type { Product } from '@app/types/products';

interface Props {
  product: Product;
  isLiked: boolean;
}

const props = defineProps<Props>();
const { formatPrice, formatInstallmentPrice } = usePriceFormatter();

const emit = defineEmits<{
  (e: 'toggle-like', productId: number): void;
}>();

const handleToggleLike = (): void => {
  emit('toggle-like', props.product.id);
};
</script>

<template>
  <li class="catalog-card">
    <a class="catalog-card__link" href="#" @click.prevent>
      <div class="catalog-card__media">
        <img
          class="catalog-card__image"
          :src="product.image"
          :alt="product.name"
          loading="lazy"
        />
      </div>

      <div class="catalog-card__meta">
        <p class="catalog-card__price-row">
          <span class="catalog-card__price">{{ formatPrice(product.price) }} ₽</span>
          <span class="catalog-card__installment">
            {{ formatInstallmentPrice(product.price) }} ₽ x 2
          </span>
        </p>
        <h2 class="catalog-card__title" :title="product.name">{{ product.name }}</h2>
      </div>
    </a>
    <button
      class="catalog-card__like-button"
      type="button"
      :aria-pressed="isLiked"
      :aria-label="isLiked ? 'Убрать из избранного' : 'Добавить в избранное'"
      @click.stop="handleToggleLike"
    >
      <svg
        class="catalog-card__heart"
        :class="{ 'catalog-card__heart--active': isLiked }"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3C9.24 3 10.91 3.81 12 5.09 13.09 3.81 14.76 3 16.5 3A5.5 5.5 0 0 1 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
        />
      </svg>
    </button>
  </li>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.catalog-card {
  width: 100%;
  position: relative;
  height: fit-content;
  opacity: 1;
  padding: 0;
  background-color: var(--color-bg-main);
  overflow: hidden;
}

.catalog-card__link {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: inherit;
  text-decoration: none;
}

.catalog-card__media {
  position: relative;
  width: 100%;
}

.catalog-card__image {
  width: 100%;
  aspect-ratio: 14/8.7;
  opacity: 1;
  object-fit: cover;
  object-position: center;
  background-color: var(--color-bg-second);
}

.catalog-card__like-button {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.catalog-card__heart {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: var(--color-text-primary);
  stroke-width: 2.2;
}

.catalog-card__heart--active {
  fill: var(--color-text-primary);
}

.catalog-card__meta {
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 0;
}

.catalog-card__price-row {
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 10px;
  opacity: 1;
  margin: 0;
}

.catalog-card__price {
  margin: 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-line);
  letter-spacing: 0;
  vertical-align: middle;
}

.catalog-card__installment {
  padding: 4px;
  background-color: var(--color-bg-contrast);
  box-shadow: 0 4px 4px 0 color-mix(in srgb, var(--color-bg-contrast) 12%, transparent);
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-line);
}

.catalog-card__title {
  display: block;
  margin: 0;
  width: 100%;
  overflow: hidden;
  font-family: var(--font-family-base);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-line);
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@include bp.tablet-down {
  .catalog-card__link {
    gap: 25px;
  }
}

@include bp.mobile-down {
  .catalog-card__link {
    gap: 20px;
  }

  .catalog-card__like-button {
    top: 12px;
    right: 12px;
    width: 20px;
    height: 20px;
  }

  .catalog-card__meta {
    gap: 9px;
  }

  .catalog-card__price-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
  }

  .catalog-card__title {
    font-size: var(--font-size-xs);
  }
}
</style>

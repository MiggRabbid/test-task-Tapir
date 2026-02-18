<script setup lang="ts">
import type { Product } from '@app/types/products';

interface Props {
  product: Product;
  isLiked: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'toggle-like', productId: number): void;
}>();

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price);
};

const formatInstallmentPrice = (price: number): string => {
  return formatPrice(Math.ceil(price / 2));
};

const handleToggleLike = (): void => {
  emit('toggle-like', props.product.id);
};
</script>

<template>
  <article class="catalog-card">
    <div class="catalog-card__media">
      <img
        class="catalog-card__image"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
      />
      <button
        class="catalog-card__like-button"
        type="button"
        :aria-pressed="isLiked"
        :aria-label="isLiked ? 'Убрать из избранного' : 'Добавить в избранное'"
        @click="handleToggleLike"
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
    </div>

    <div class="catalog-card__meta">
      <p class="catalog-card__price-row">
        <span class="catalog-card__price">{{ formatPrice(product.price) }} ₽</span>
        <span class="catalog-card__installment">
          {{ formatInstallmentPrice(product.price) }} ₽ x 2
        </span>
      </p>
      <h2 class="catalog-card__title">{{ product.name }}</h2>
    </div>
  </article>
</template>

<style scoped lang="scss">
.catalog-card {
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: 290px;
  height: 256px;
  padding: 0;
  background-color: #fff;
  transition: box-shadow 0.2s ease;
}

.catalog-card:hover {
  box-shadow: 0 4px 4px 0 #0000001f;
}

.catalog-card__media {
  position: relative;
  width: 290px;
  height: 180px;
  background-color: #efefef;
}

.catalog-card__image {
  width: 290px;
  height: 180px;
  object-fit: contain;
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
  stroke: #111;
  stroke-width: 2.2;
}

.catalog-card__heart--active {
  fill: #111;
}

.catalog-card__meta {
  padding: 0;
}

.catalog-card__price-row {
  display: flex;
  align-items: center;
  width: 290px;
  height: 45px;
  gap: 5px;
  margin: 0;
}

.catalog-card__installment {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 18px;
  padding: 4px;
  background-color: #000;
  box-shadow: 0 4px 4px 0 #0000001f;
  color: #fff;
  font-family: 'Golos Text', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
}

.catalog-card__title {
  margin: 0;
  font-family: 'Golos Text', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
  vertical-align: bottom;
}
</style>

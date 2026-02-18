<script setup lang="ts">
import type { Product } from '@app/types/products';

interface Props {
  products: Product[];
  likedProductIds: number[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'toggle-like', productId: number): void;
}>();

const isProductLiked = (productId: number): boolean => {
  return props.likedProductIds.includes(productId);
};

const handleToggleLike = (productId: number): void => {
  emit('toggle-like', productId);
};
</script>

<template>
  <ul class="catalog__list">
    <CatalogProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :is-liked="isProductLiked(product.id)"
      @toggle-like="handleToggleLike"
    />
  </ul>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.catalog__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}

@include bp.desktop-compact-down {
  .catalog__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include bp.tablet-down {
  .catalog__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@include bp.mobile-down {
  .catalog__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>

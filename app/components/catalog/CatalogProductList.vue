<script setup lang="ts">
import CatalogProductCard from '@app/components/catalog/CatalogProductCard.vue';

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
    <li v-for="product in products" :key="product.id" class="catalog__item">
      <CatalogProductCard
        :product="product"
        :is-liked="isProductLiked(product.id)"
        @toggle-like="handleToggleLike"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.catalog__list {
  display: grid;
  grid-template-columns: repeat(4, 290px);
  gap: 20px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

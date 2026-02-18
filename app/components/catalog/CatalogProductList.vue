<script setup lang="ts">
import type { Product } from '@app/types/products';

interface Props {
  products: Product[];
}

defineProps<Props>();
</script>

<template>
  <ul class="catalog__list">
    <CatalogProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
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

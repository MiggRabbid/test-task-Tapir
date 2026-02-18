<script setup lang="ts">
import { useCatalogProducts } from '@app/composables/useCatalogProducts';
import { useLikedProducts } from '@app/composables/useLikedProducts';

const { products, isLoading, hasError, canLoadMore, loadMoreProducts } =
  await useCatalogProducts();
const { likedProductIds, toggleProductLike } = useLikedProducts();
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог</h1>

    <section class="catalog__content">
      <CatalogProductList
        v-if="products.length > 0"
        :products="products"
        :liked-product-ids="likedProductIds"
        @toggle-like="toggleProductLike"
      />

      <CatalogLoadMoreControls
        :has-error="hasError"
        :is-loading="isLoading"
        :can-load-more="canLoadMore"
        @load-more="loadMoreProducts"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  width: 100%;
  min-height: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 110px;
}

.catalog__title {
  font-size: var(--font-size-3xl);
  padding: 0;
  margin: 0;
  line-height: var(--line-height-tight);
  text-transform: uppercase;
}

.catalog__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 110px;
}

@media (max-width: 968px) {
  .catalog {
    gap: 60px;
  }

  .catalog__content {
    gap: 70px;
  }
  .catalog__title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 640px) {
  .catalog {
    gap: 40px;
  }
  .catalog__content {
    gap: 50px;
  }
  .catalog__title {
    font-size: var(--font-size-xl);
  }
}
</style>

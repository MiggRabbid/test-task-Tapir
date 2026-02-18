<script setup lang="ts">
import AppContainer from '@app/components/layout/AppContainer.vue';
import CatalogProductList from '@app/components/catalog/CatalogProductList.vue';

import type { Product, ProductsApiResponse } from '@app/types/products';

const PAGE_LIMIT = 12;

const fetchProductsPage = (page: number): Promise<ProductsApiResponse> => {
  return $fetch<ProductsApiResponse>('/api/products', {
    query: {
      page,
      limit: PAGE_LIMIT,
    },
  });
};

const { data: initialData, error: initialError } = await useAsyncData(
  'catalog-products-initial',
  () => fetchProductsPage(1),
);

const products = ref<Product[]>(initialData.value?.products ?? []);
const currentPage = ref(initialData.value?.currentPage ?? 0);
const totalPages = ref(initialData.value?.totalPages ?? 1);
const isLoading = ref(false);
const hasError = ref(Boolean(initialError.value));

const canLoadMore = computed(
  () => !isLoading.value && currentPage.value < totalPages.value,
);

const loadMoreProducts = async (): Promise<void> => {
  if (isLoading.value || currentPage.value >= totalPages.value) {
    return;
  }

  isLoading.value = true;
  hasError.value = false;

  try {
    const response = await fetchProductsPage(currentPage.value + 1);

    products.value = [...products.value, ...response.products];
    currentPage.value = response.currentPage;
    totalPages.value = response.totalPages;
  } catch {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const likedProductIds = ref<number[]>([]);

const isProductLiked = (productId: number): boolean => {
  return likedProductIds.value.includes(productId);
};

const toggleProductLike = (productId: number): void => {
  if (isProductLiked(productId)) {
    likedProductIds.value = likedProductIds.value.filter((id) => id !== productId);
    return;
  }

  likedProductIds.value = [...likedProductIds.value, productId];
};

</script>

<template>
  <main class="catalog">
    <AppContainer>
      <section class="catalog__content">
        <h1 class="catalog__title">Каталог</h1>

        <CatalogProductList
          v-if="products.length > 0"
          :products="products"
          :liked-product-ids="likedProductIds"
          @toggle-like="toggleProductLike"
        />

        <p v-if="hasError" class="catalog__error">Произошла ошибка, попробуйте позже</p>

        <div class="catalog__controls">
          <button
            v-if="canLoadMore"
            class="catalog__more-button"
            type="button"
            @click="loadMoreProducts"
          >
            Показать еще
          </button>

          <p v-else-if="isLoading" class="catalog__loading">Загрузка...</p>
        </div>
      </section>
    </AppContainer>
  </main>
</template>

<style scoped lang="scss">
.catalog {
  padding: 56px 0 84px;
}

.catalog__title {
  margin: 0 0 28px;
  font-size: 44px;
  line-height: 1.1;
}

.catalog__controls {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

.catalog__more-button {
  min-width: 204px;
  min-height: 70px;
  border: 1px solid #444;
  background: #e9e9e9;
  color: #1f1f1f;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
}

.catalog__loading {
  margin: 0;
  font-size: 24px;
}

.catalog__error {
  margin: 24px 0 0;
  color: #bf4444;
  text-align: center;
}

@media (max-width: 1200px) {
  .catalog__more-button {
    min-width: 164px;
    min-height: 58px;
    font-size: 22px;
  }
}

@media (max-width: 760px) {
  .catalog {
    padding: 36px 0 56px;
  }

  .catalog__title {
    font-size: 32px;
  }
}
</style>

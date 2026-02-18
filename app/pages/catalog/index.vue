<script setup lang="ts">
import PageContainer from '@app/components/layout/PageContainer.vue';
import { PAGE_LIMIT } from '@app/constants/api-config';

import type { Product, ProductsApiResponse } from '@app/types/products';

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

const canLoadMore = computed(() => currentPage.value < totalPages.value);

const btnText = computed(() => {
  if (isLoading.value) {
    return 'Загрузка...';
  } else if (hasError.value) {
    return 'Повторить';
  } else {
    return 'Загрузить еще';
  }
});

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
  <PageContainer>
    <div class="catalog">
      <h1 class="catalog__title">Каталог</h1>

      <section class="catalog__content">
        <CatalogProductList
          v-if="products.length > 0"
          :products="products"
          :liked-product-ids="likedProductIds"
          @toggle-like="toggleProductLike"
        />

        <div class="controls">
          <p v-if="hasError" class="controls__error">
            Произошла ошибка, попробуйте позже
          </p>

          <button
            v-if="canLoadMore"
            :class="isLoading ? 'controls__loading' : 'controls__btn'"
            :disabled="isLoading"
            type="button"
            @click="loadMoreProducts"
          >
            {{ btnText }}
          </button>
        </div>
      </section>
    </div>
  </PageContainer>
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

.controls {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: fit-content;

  &__error {
    text-wrap: nowrap;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  &__btn,
  &__loading {
    width: fit-content;
    height: fit-content;
    opacity: 1;
    padding: 10px 24px;
    background-color: var(--color-bg-main);
    border: 1px solid transparent;
    font-size: 14px;
  }

  &__btn {
    border-color: var(--color-text-primary);
    &:hover {
      opacity: 0.8;
    }
  }

  &__btn:disabled,
  &__loading:disabled {
    opacity: 1;
    color: var(--color-text-primary);
    background-color: var(--color-bg-main);
    -webkit-text-fill-color: var(--color-text-primary);
  }
  &__btn:disabled {
    border-color: var(--color-text-primary);
  }
  &__loading:disabled {
    border-color: transparent;
  }
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

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

export const useCatalogProducts = async () => {
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

  const loadMoreProducts = async (): Promise<void> => {
    if (isLoading.value || !canLoadMore.value) {
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

  return {
    products,
    isLoading,
    hasError,
    canLoadMore,
    loadMoreProducts,
  };
};

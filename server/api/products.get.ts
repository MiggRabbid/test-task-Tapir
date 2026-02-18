import { PAGE_LIMIT, DEFAULT_PAGE, PRODUCTS_API_URL } from '@app/constants/api-config';

import type { ProductsApiResponse } from '@app/types/products';

const parsePositiveNumber = (value: unknown, fallback: number): number => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const parsedValue = Number.parseInt(String(rawValue), 10);

  if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
    return fallback;
  }

  return parsedValue;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parsePositiveNumber(query.page, DEFAULT_PAGE);
  const limit = parsePositiveNumber(query.limit, PAGE_LIMIT);
  const upstreamUrl = `${PRODUCTS_API_URL}?page=${page}&limit=${limit}`;

  console.info('[api/products] Incoming request', {
    page,
    limit,
  });
  console.info('[api/products] Upstream request', upstreamUrl);

  try {
    const data = await $fetch<ProductsApiResponse>(PRODUCTS_API_URL, {
      query: {
        page,
        limit,
      },
      timeout: 10_000,
    });
    console.info('[api/products] Upstream response', {
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      productsCount: data.products.length,
    });

    return {
      total: data.total,
      totalPages: data.totalPages,
      currentPage: data.currentPage,
      limit: data.limit,
      products: data.products,
    } satisfies ProductsApiResponse;
  } catch (error) {
    console.error('[api/products] Upstream error', error);
    throw createError({
      statusCode: 502,
      statusMessage: 'Не удалось получить товары с внешнего API',
    });
  }
});

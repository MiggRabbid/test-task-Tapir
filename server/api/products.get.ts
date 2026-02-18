import { PAGE_LIMIT, DEFAULT_PAGE, PRODUCTS_API_URL } from '@app/constants/api-config';

import type { ProductsApiResponse } from '@app/types/products';

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

const getQueryValue = (value: unknown): string | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;

  if (rawValue === undefined) {
    return undefined;
  }

  return String(rawValue);
};

const parsePositiveInteger = (value: string): number | null => {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const parsedValue = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
    return null;
  }

  return parsedValue;
};

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const pageParam = getQueryValue(query.page);
  const limitParam = getQueryValue(query.limit);

  const parsedPage =
    pageParam === undefined ? DEFAULT_PAGE : parsePositiveInteger(pageParam);
  if (parsedPage === null) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Параметр page должен быть положительным целым числом',
    });
  }

  const parsedLimit =
    limitParam === undefined ? PAGE_LIMIT : parsePositiveInteger(limitParam);
  if (parsedLimit === null) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Параметр limit должен быть положительным целым числом',
    });
  }

  const page = parsedPage;
  const limit = clamp(parsedLimit, 1, PAGE_LIMIT);
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

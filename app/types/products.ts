export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ProductsQueryParams {
  page?: number;
  limit?: number;
}

export interface ProductsApiResponse {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  products: Product[];
}

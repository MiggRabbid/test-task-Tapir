export const useLikedProducts = () => {
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

  return {
    likedProductIds,
    toggleProductLike,
  };
};

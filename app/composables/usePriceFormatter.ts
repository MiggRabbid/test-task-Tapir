const priceFormatter = new Intl.NumberFormat('ru-RU');

export const usePriceFormatter = () => {
  const formatPrice = (price: number): string => {
    return priceFormatter.format(price);
  };

  const formatInstallmentPrice = (price: number): string => {
    return formatPrice(Math.ceil(price / 2));
  };

  return {
    formatPrice,
    formatInstallmentPrice,
  };
};

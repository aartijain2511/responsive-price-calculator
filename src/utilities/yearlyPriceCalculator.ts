const yearlyPriceCalculator = (basePrice: number): number => {
  let totalPrice: number = basePrice * 12;
  let discount: number = totalPrice * 0.25;
  let discountedPrice: number = totalPrice - discount;
  return discountedPrice;
};

export default yearlyPriceCalculator;

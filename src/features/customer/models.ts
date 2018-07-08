export type DiscountPremium = {
  perAd: {
    minQty: number;
    price: number;
  };
};

export type DiscountStandOut = {
  price: number;
};

export type DiscountClassic = {
  trigger: number;
};

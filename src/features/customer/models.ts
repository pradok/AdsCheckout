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

export type RulesDesc = string[];

export type CustomerDiscounts = {
  unilever: {
    rulesDescription: RulesDesc;
    classic: DiscountClassic;
  };
  apple: {
    rulesDescription: RulesDesc;
    standout: DiscountStandOut;
  };
  nike: {
    rulesDescription: RulesDesc;
    premium: DiscountPremium;
  };
  ford: {
    rulesDescription: RulesDesc;
    classic: DiscountClassic;
    standout: DiscountStandOut;
    premium: DiscountPremium;
  };
};

export interface CustomerDiscountsState {
  discounts: CustomerDiscounts | boolean;
  isLoading: boolean;
  isFetched: boolean;
}

export type CustomerDiscountAction = {
  type: string;
  payload?: CustomerDiscounts;
};

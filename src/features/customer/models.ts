export interface DiscountPremium {
  perAd: {
    minQty: number;
    price: number;
  };
}

export interface DiscountStandOut {
  price: number;
}

export interface DiscountClassic {
  trigger: number;
}

export type RulesDesc = string[];

export type DiscountRules = {
  rulesDescription: RulesDesc;
  classic?: DiscountClassic;
  standout?: DiscountStandOut;
  premium?: DiscountPremium;
};

export type CustomerDiscounts = {
  unilever: DiscountRules;
  apple: DiscountRules;
  nike: DiscountRules;
  ford: DiscountRules;
};

export interface CustomerDiscountsState {
  discounts?: CustomerDiscounts;
  isLoading: boolean;
  isFetched: boolean;
}

export type CustomerDiscountAction = {
  type: string;
  payload?: CustomerDiscounts;
};

export type CustomerId = 'unilever' | 'apple' | 'nike' | 'ford';

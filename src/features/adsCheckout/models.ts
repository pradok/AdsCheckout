import {customerModels} from '../customer';

export type Product = {
  id?: number | string;
  price: number;
  quantity: number;
  priceReduced: number;
  title: string;
};

export type Discount = {
  premium?: customerModels.DiscountPremium;
  classic?: customerModels.DiscountClassic;
  standout?: customerModels.DiscountStandOut;
  rulesDescription: string[];
};

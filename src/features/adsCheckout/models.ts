import {customerModels} from '../customer';
import {productModels} from '../product';

export type Product = productModels.Product & {
  quantity: number;
  priceReduced: number;
};

export type Discount = {
  premium?: customerModels.DiscountPremium;
  classic?: customerModels.DiscountClassic;
  standout?: customerModels.DiscountStandOut;
  rulesDescription: string[];
};

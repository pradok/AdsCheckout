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

export type addedSKUs = string[];
export type quantityById = {
  classic: number;
  standout: number;
  premium: number;
};

export type sku = 'classic' | 'premium' | 'standout';

export interface CartState {
  addedSKUs: addedSKUs;
  quantityById: quantityById;
}

export type AddToCartAction = {
  type: string;
  payload: sku;
};

import {actionTypes as at} from './constants';

export const addToCart = (sku: string) => {
  return {
    type: at.CHECKOUT_ADD_TO_CART,
    payload: sku,
  };
};

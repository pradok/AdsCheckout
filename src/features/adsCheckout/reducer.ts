import {actionTypes as at} from './constants';
import {CartState, AddToCartAction} from './models';

export const initialState: CartState = {
  addedSKUs: [],
  quantityById: {
    classic: 0,
    standout: 0,
    premium: 0,
  },
};

export default (state = initialState, action: AddToCartAction) => {
  switch (action.type) {
    case at.CHECKOUT_ADD_TO_CART:
      const skus = {...state.quantityById};
      skus[action.payload] += 1;
      return {...state, quantityById: skus};
    default:
      return state;
  }
};

import {actionTypes as at} from './constants';
import {CustomerDiscountAction, CustomerDiscountsState} from './models';

export const initialState: CustomerDiscountsState = {
  discounts: false,
  isLoading: false,
  isFetched: false,
};

export default (state = initialState, action: CustomerDiscountAction) => {
  switch (action.type) {
    case at.CUSTOMER_DISCOUNTS_FETCH:
      return {...state, isLoading: true, isFetched: false, discounts: initialState.discounts};
    case at.CUSTOMER_DISCOUNTS_FETCH_SUCCESS:
      return {...state, isLoading: false, isFetched: true, discounts: action.payload};
    case at.CUSTOMER_DISCOUNTS_FETCH_ERROR:
      return {...state, ...initialState};
    default:
      return state;
  }
};

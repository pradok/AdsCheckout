import { actionTypes as at } from './constants';
import { CustomerDiscounts } from './models';

export const fetchCustomerDiscounts = () => {
  return {
    type: at.CUSTOMER_DISCOUNTS_FETCH,
  };
};

export const fetchSuccess = (result: CustomerDiscounts) => {
  return {
    type: at.CUSTOMER_DISCOUNTS_FETCH_SUCCESS,
    payload: result,
  };
};

export const fetchError = (error: Error) => {
  return {
    type: at.CUSTOMER_DISCOUNTS_FETCH_ERROR,
    payload: error,
  };
};

import { actionTypes as at } from './constants';
import { Product } from './models';

export const fetchProducts = () => {
  return {
    type: at.PRODUCTS_COLLECTION_FETCH,
  };
};

export const fetchSuccess = (result: Product[]) => {
  return {
    type: at.PRODUCTS_COLLECTION_FETCH_SUCCESS,
    payload: result,
  };
};

export const fetchError = (error: Error) => {
  return {
    type: at.PRODUCTS_COLLECTION_FETCH_ERROR,
    payload: error,
  };
};

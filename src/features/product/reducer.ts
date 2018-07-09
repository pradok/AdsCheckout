import {actionTypes as at} from './constants';
import {ProductAction, ProductCollectionState} from './models';

export const initialState: ProductCollectionState = {
  collection: [],
  isLoading: false,
  isFetched: false,
};

export default (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case at.PRODUCTS_COLLECTION_FETCH:
      return {...state, isLoading: true, isFetched: false, collection: initialState.collection};
    case at.PRODUCTS_COLLECTION_FETCH_SUCCESS:
      return {...state, isLoading: false, isFetched: true, collection: action.payload};
    case at.PRODUCTS_COLLECTION_FETCH_ERROR:
      return {...state, ...initialState};
    default:
      return state;
  }
};

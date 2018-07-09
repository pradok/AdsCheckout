import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as Product from '../features/product';

export interface RootState {
  products: Product.productModels.ProductCollectionState;
}

const rootReducer = combineReducers({
  router: routerReducer,
  products: Product.productReducer,
});

export const initialState: RootState = {
  products: Product.initialState,
};

export default rootReducer;

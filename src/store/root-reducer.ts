import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as Product from '../features/product';
import * as Customer from '../features/customer';

export interface RootState {
  products: Product.productModels.ProductCollectionState;
  customer: Customer.customerModels.CustomerDiscountsState;
}

const rootReducer = combineReducers({
  router: routerReducer,
  products: Product.productReducer,
  customer: Customer.customerReducer,
});

export const initialState: RootState = {
  products: Product.initialState,
  customer: Customer.initialState,
};

export default rootReducer;

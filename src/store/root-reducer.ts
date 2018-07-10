import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as Product from '../features/product';
import * as Customer from '../features/customer';
import * as Checkout from '../features/adsCheckout';

export interface RootState {
  products: Product.productModels.ProductCollectionState;
  customer: Customer.customerModels.CustomerDiscountsState;
  cart: Checkout.checkoutModels.CartState;
}

const rootReducer = combineReducers({
  router: routerReducer,
  products: Product.productReducer,
  customer: Customer.customerReducer,
  cart: Checkout.checkoutReducer,
});

export default rootReducer;

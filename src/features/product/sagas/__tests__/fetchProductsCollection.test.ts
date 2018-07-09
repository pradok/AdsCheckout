import { testSaga } from 'redux-saga-test-plan';
import { Product } from '../../models';
import {fetchProducts} from '../../api';
import {actionTypes as at} from '../../constants';
import {fetchProductsCollection} from '../fetchProductsCollection';

describe('Saga fetchProductsCollection', () => {
  describe('Scenario 1: API request success', () => {
    const products: Product[] = [
      {
        id: 'classic',
        title: 'Classic Ad',
        price: 269.99,
      },
      {
        id: 'standout',
        title: 'Standout Ad',
        price: 322.99,
      },
      {
        id: 'premium',
        title: 'Premium Ad',
        price: 394.99,
      },
    ];
    const action = {
      type: at.PRODUCTS_COLLECTION_FETCH_SUCCESS,
      payload: products,
    };
    it('fetchProductsCollection works!', () => {
      testSaga(fetchProductsCollection)
        .next()
        .call(fetchProducts)
        .next(action)
        .next()
        .isDone();
    });
  });
});

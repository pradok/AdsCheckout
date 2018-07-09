import { call, put } from 'redux-saga/effects';

import { fetchProducts } from '../services';
import { fetchSuccess, fetchError } from '../actions';
import { Product } from '../models';

export function* fetchProductsCollection() {
  try {
    const result: Product[] = yield call(fetchProducts);
    yield put(fetchSuccess(result));
  } catch (error) {
    yield put(fetchError(error));
  }
}

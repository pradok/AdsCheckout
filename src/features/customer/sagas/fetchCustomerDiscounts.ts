import { call, put } from 'redux-saga/effects';

import { fetchDiscounts } from '../api';
import { fetchSuccess, fetchError } from '../actions';
import { CustomerDiscounts } from '../models';

export function* fetchCustomerDiscounts() {
  try {
    const result: CustomerDiscounts = yield call(fetchDiscounts);
    yield put(fetchSuccess(result));
  } catch (error) {
    yield put(fetchError(error));
  }
}

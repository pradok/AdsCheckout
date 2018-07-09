import { takeLatest } from 'redux-saga/effects';
import {fetchCustomerDiscounts} from './fetchCustomerDiscounts';
import { actionTypes as at } from '../constants';

export default function* customerDiscountsWatch() {
  yield takeLatest(at.CUSTOMER_DISCOUNTS_FETCH, fetchCustomerDiscounts);
}

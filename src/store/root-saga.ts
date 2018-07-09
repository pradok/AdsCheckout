import { fork, all } from 'redux-saga/effects';
import {productsCollectionWatch} from '../features/product';
import {customerDiscountsWatch} from '../features/customer';

export default function* rootSaga() {
  yield all([
    fork(productsCollectionWatch),
    fork(customerDiscountsWatch),
  ]);
}

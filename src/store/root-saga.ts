import { fork, all } from 'redux-saga/effects';
import {productsCollectionWatch} from '../features/product';

export default function* rootSaga() {
  yield all([
    fork(productsCollectionWatch),
  ]);
}

import { takeLatest } from 'redux-saga/effects';
import {fetchProductsCollection} from './fetchProductsCollection';
import { actionTypes as at } from '../constants';

export default function* productsCollectionWatch() {
  yield takeLatest(at.PRODUCTS_COLLECTION_FETCH, fetchProductsCollection);
}

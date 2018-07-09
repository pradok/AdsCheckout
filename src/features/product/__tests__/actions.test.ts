import * as actions from '../actions';
import {Product} from '../models';

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

const error: Error = {
  name: 'Error Name',
  message: 'Error fetching products',
};

describe('features -> product -> actions', () => {
  it('fetchProducts', () => {
    expect(actions.fetchProducts()).toMatchSnapshot();
  });
  it('fetchProducts', () => {
    expect(actions.fetchSuccess(products )).toMatchSnapshot();
  });
  it('fetchProducts', () => {
    expect(actions.fetchError(error)).toMatchSnapshot();
  });
});

import * as React from 'react';
import {shallow} from 'enzyme';

import ProductList from '../product-list';
import {Product} from '../../models';

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

const addToCartMock = jest.fn();

it('<ProductList> renders correctly', () => {
  const component = shallow(<ProductList products={products} addToCart={addToCartMock} />);
  expect(component).toMatchSnapshot();
});

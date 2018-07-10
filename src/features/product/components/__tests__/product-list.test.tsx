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

const rules = [
    '5 for 4 deal on Classic Ads',
    'Standout Ad drops to $309.99 per ad',
    'Premium Ads drop to $389.99 per ad when 3 or more are purchased',
  ];

const addToCartMock = jest.fn();

it('<ProductList> renders correctly', () => {
  const component = shallow(<ProductList products={products} addToCart={addToCartMock} rulesDesc={rules}/>);
  expect(component).toMatchSnapshot();
});

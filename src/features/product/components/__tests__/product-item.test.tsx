import * as React from 'react';
import {shallow} from 'enzyme';

import ProductItem, {Props} from '../product-item';

const productItem: Props = {
  product: {
    price: 269.99,
    title: 'Classic Ad',
  },
  onClickAddToCart: jest.fn(),
};

it('<ProductItem> renders correctly', () => {
  const component = shallow(
    <ProductItem {...productItem} />
  );
  expect(component).toMatchSnapshot();
});

it('<ProductItem> Add to cart button click', () => {
  const component = shallow(
    <ProductItem {...productItem} />
  );
  component.find('.add-cart-btn').simulate('click');
  expect(productItem.onClickAddToCart).toHaveBeenCalled();
});

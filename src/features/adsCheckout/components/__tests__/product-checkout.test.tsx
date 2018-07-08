import * as React from 'react';
import {Product} from '../../models';
import {shallow} from 'enzyme';

import ProductCheckOut from '../product-checkout';

it('<Product> renders correctly', () => {
  const props: Product = {id: 'classic', price: 394.99, quantity: 379.99, priceReduced: 4, title: 'Premium Ad'};
  const component = shallow(<ProductCheckOut {...props} />);
  expect(component).toMatchSnapshot();
});

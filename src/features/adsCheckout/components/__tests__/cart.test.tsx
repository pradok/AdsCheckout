import * as React from 'react';
import {shallow} from 'enzyme';

import Cart from '../cart';
import {Product, Discount} from '../../models';

type Products = Product[];

const products: Products = [
  {
    id: 'classic',
    title: 'Classic Ad',
    price: 269.99,
    priceReduced: 0,
    quantity: 2,
  },
  {
    id: 'standout',
    price: 322.99,
    priceReduced: 299.99,
    quantity: 2,
    title: 'Standout Ad',
  },
  {
    id: 'premium',
    price: 394.99,
    priceReduced: 0,
    quantity: 2,
    title: 'Premium Ad',
  },
];

const discountsStandout: Discount = {
  rulesDescription: ['Standout Ad drops to $299.99 per ad'],
  standout: {
    price: 299.99,
  },
};

const customerStandOut = {
  discounts: discountsStandout,
};

const total = '1929.94';

it('<Cart> renders correctly with standout rules', () => {
  const component = shallow(
    <Cart
      products={products}
      customer={customerStandOut}
      total={total}
    />
  );
  expect(component).toMatchSnapshot();
});

const discountsAll: Discount = {
  rulesDescription: ['5 for 4 deal on Classic Ads', 'Standout Ad drops to $299.99 per ad',
  'Premium Ads drop to $389.99 per ad when 3 or more are purchased'],
  classic: {
    trigger: 5,
  },
  standout: {
    price: 309.99,
  },
  premium: {
    perAd: {
      minQty: 3,
      price: 389.99,
    },
  },
};

const customerAllDiscounts = {
  discounts: discountsAll,
};

const total2 = '1949.94';

it('<Cart> renders correctly with classic, premium and standout rules', () => {
  const component = shallow(
    <Cart
      products={products}
      customer={customerAllDiscounts}
      total={total2}
    />
  );
  expect(component).toMatchSnapshot();
});

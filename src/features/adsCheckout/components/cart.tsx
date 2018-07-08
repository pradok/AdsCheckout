import * as React from 'react';
import ProductCheckout from './product-checkout';
import {Product, Discount} from '../models';

interface Props {
  products: Product[];
  total: string;
  customer: {
    discounts: Discount;
  };
}

const Cart = ({products, total, customer}: Props) => {
  const hasProducts = products && products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <ProductCheckout
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        priceReduced={product.priceReduced}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some Ad products.</em>
  );

  const rulesDescription = customer.discounts.rulesDescription && customer.discounts.rulesDescription.length ?
    (customer.discounts.rulesDescription.map((rule, index) => <li key={index}>{rule}</li>)) : '';

  return (
    <div>
      <h3>Your Cart</h3>
      <ul>{rulesDescription}</ul>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
    </div>
  );
};

export default Cart;

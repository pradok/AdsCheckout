import * as React from 'react';
import ProductCheckout from './product-checkout';
import {Product, Discount} from '../models';

interface Props {
  products: Product[];
  total: string;
  discounts: Discount;
}

const Cart = ({products, total, discounts}: Props) => {
  const hasProducts = products && products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <ProductCheckout
        id={product.id}
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

  /*const rulesDescription = discounts.rulesDescription && discounts.rulesDescription.length ?
    (discounts.rulesDescription.map((rule, index) => <li key={index}>{rule}</li>)) : '';
    */

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
    </div>
  );
};

export default Cart;

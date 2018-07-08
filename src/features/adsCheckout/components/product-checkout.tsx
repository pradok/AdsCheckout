import * as React from 'react';
import { Product } from '../models';

interface Props extends Product {
}

const ProductCheckout = ({price, quantity, priceReduced, title, id}: Props) => (
  <div className={id}>
    {title}
    : &#36;{!priceReduced ? price : (priceReduced < 0 ? price : priceReduced)} {quantity ? ` x ${quantity}` : null}
    = {priceReduced > 0 ? (quantity * priceReduced).toFixed(2) : (quantity * price).toFixed(2)}
    {priceReduced < 0 ? `${priceReduced}` : ''}
    {priceReduced < 0 ? `= $${+(quantity * price).toFixed(2) - (-priceReduced)}` : ''}
  </div>
);

export default ProductCheckout;

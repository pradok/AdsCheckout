import * as React from 'react';

import {StyledProductItem, StyledButton} from '../../../common/styled';

export interface Props {
  product: {
    title: string;
    price: number;
  };
  promo: string;
  onClickAddToCart: () => void;
}
const ProductItem = ({product, onClickAddToCart, promo}: Props) => (
  <StyledProductItem className={`product-item`}>
    <h3>{product.title}</h3>
    <h4>${product.price}</h4>
    <ul>
      <li>{promo}</li>
    </ul>
    <StyledButton className="add-cart-btn" onClick={onClickAddToCart}>
      {'Add to cart'}
    </StyledButton>
  </StyledProductItem>
);

export default ProductItem;

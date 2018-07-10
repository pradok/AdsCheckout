import * as React from 'react';

import {StyledFlexContainer} from '../../../common/styled';

import ProductItem from './product-item';
import {Product} from '../models';

export interface Props {
  products: Product[];
  addToCart: (id: string) => void;
}

const ProductList = ({products, addToCart}: Props) => (
  <div>
    <h2>Ad packages</h2>
    <StyledFlexContainer>
    {
      products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onClickAddToCart={() => addToCart(product.id)}
        />)
    }
    </StyledFlexContainer>
  </div>
);

export default ProductList;

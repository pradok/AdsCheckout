import * as React from 'react';

import ProductItem from './product-item';
import {Product} from './models';

export interface Props {
  products: Product[];
  addToCart: (id: string) => void;
}

const ProductList = ({products, addToCart}: Props) => (
  <div>
    <h2>Ad packages</h2>
    {
      products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onClickAddToCart={() => addToCart(product.id)}
        />)
    }
  </div>
);

export default ProductList;

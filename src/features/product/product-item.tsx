import * as React from 'react';

export interface Props {
  product: {
    title: string;
    price: number;
  };
  onClickAddToCart: () => void;
}

const ProductItem = ({product, onClickAddToCart}: Props) => (
  <div className={`product-item`}>
    <div>{product.title}</div>
    <div>{product.price}</div>
    <button className="add-cart-btn" onClick={onClickAddToCart}>
      {'Add to cart'}
    </button>
  </div>
);

export default ProductItem;

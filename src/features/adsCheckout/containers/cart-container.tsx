import * as React from 'react';
import { connect } from 'react-redux';

import { getAddedSKUs, getProduct, getReducedPrice } from '../../utils/checkout';

import { RootState } from '../../../store';
import { quantityById, sku, Product } from '../models';
import { customerModels } from '../../customer';

import Cart from '../components/cart';

interface OwnProps {
  customerId: customerModels.CustomerId;
}

interface StateProps {
  quantity: quantityById;
  discounts: customerModels.DiscountRules;
  products: Product[];
  cartTotal: string;
}

type Props = OwnProps & StateProps;

const CartContainer = ({ customerId, quantity, products, discounts, cartTotal }: Props) => {
  return (
    <div>
      <h2>Checkout</h2>
      {customerId}
      {discounts && <Cart products={products} total={cartTotal} discounts={discounts}/>}
    </div>
  );
};

const mapStateToProps = (state: RootState, props: OwnProps) => {
  const {products, cartTotal} = getCartProductsAndTotal(state, props.customerId);
  return {
    quantity: state.cart.quantityById,
    discounts: getDiscounts(state, props.customerId),
    products,
    cartTotal,
  };
};

export default connect(mapStateToProps, null)(CartContainer);

const getDiscounts = (state: RootState, customerId: customerModels.CustomerId) => {
  if (state.customer.discounts !== undefined) {
    return state.customer.discounts[customerId];
  }
  return null;
};

const getCartProductsAndTotal = (state: RootState, customerId: customerModels.CustomerId) => {
  const { customer, products } = state;
  const { discounts } = customer;
  if (discounts !== undefined) {
    let cartTotal = 0;
    const productsInCart = getAddedSKUs(state.cart.quantityById).map((id: sku) => {
      const product = getProduct(products.collection, id);
      const originalPrice = product !== undefined ? product.price : 0;
      const priceReduced = getReducedPrice(discounts[customerId], id, state.cart.quantityById[id], originalPrice);

      const price = priceReduced ? priceReduced : originalPrice;
      if (price < 0) {
        cartTotal = (cartTotal + originalPrice * state.cart.quantityById[id]) + price;
      } else {
        cartTotal = cartTotal + price * state.cart.quantityById[id];
      }

      return {
        ...getProduct(products.collection, id),
        quantity: state.cart.quantityById[id],
        priceReduced,
      };
    });
    return { cartTotal: cartTotal.toFixed(2), products: productsInCart };
  }
  return { cartTotal: '0.00', products: []};
};

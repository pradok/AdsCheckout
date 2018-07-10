import * as React from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';

import {checkoutActions} from '../../adsCheckout';

import ProductList from '../components/product-list';
import {Product} from '../models';
import {RootState} from '../../../store';
import {fetchProducts} from '../actions';
import {customerModels, fetchCustomerDiscounts} from '../../customer';

export interface OwnProps {
  customerId: customerModels.CustomerId;
}

interface StateProps {
  products: Product[];
  isLoading: boolean;
  isFetched: boolean;
  rulesDesc: customerModels.RulesDesc;
}

interface DispatchProps {
  fetchProductCollection: () => void;
  fetchCustomerDiscounts: () => void;
  addToCart: (sku: string) => void;
}

type Props = StateProps & DispatchProps & OwnProps;
interface State {
}

class ProductContainer extends React.Component<Props, State> {

  addToCartHandler: (id: string) => void = id => {
    this.props.addToCart(id);
  };

  componentDidMount() {
    this.props.fetchProductCollection();
    this.props.fetchCustomerDiscounts();
  }

  render() {
    const {customerId, rulesDesc} = this.props;
    return (
      <div>
        {customerId}
        <ProductList products={this.props.products} addToCart={this.addToCartHandler} rulesDesc={rulesDesc}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  const { discounts } = state.customer;
  let rules: customerModels.RulesDesc = [];
  if (discounts !== undefined) {
    rules = discounts[props.customerId].rulesDescription;
  }
  return {
    products: state.products.collection,
    isLoading: state.products.isLoading,
    isFetched: state.products.isFetched,
    rulesDesc: rules,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchProductCollection: () => dispatch(fetchProducts()),
    fetchCustomerDiscounts: () => dispatch(fetchCustomerDiscounts()),
    addToCart: (sku: string) => dispatch(checkoutActions.addToCart(sku)),
  };
};

export default connect<StateProps, DispatchProps, {customerId: customerModels.CustomerId}>(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);

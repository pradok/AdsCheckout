import * as React from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';

import ProductList from '../components/product-list';
import {Product} from '../models';
import {RootState} from '../../../store';
import {fetchProducts} from '../actions';
import {fetchCustomerDiscounts} from '../../customer';
import {RouteComponentProps} from 'react-router-dom';

export interface OwnProps {
  routeProps: RouteComponentProps<{ customer: string }>;
}

interface StateProps {
  products: Product[];
  isLoading: boolean;
  isFetched: boolean;
}

interface DispatchProps {
  fetchProductCollection: () => void;
  fetchCustomerDiscounts: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;
interface State {
}

class ProductContainer extends React.Component<Props, State> {

  addToCartHandler: (id: string) => void = id => {
    console.log('addToCartHandler', id);
  };

  componentDidMount() {
    this.props.fetchProductCollection();
    this.props.fetchCustomerDiscounts();
  }

  render() {
    const {routeProps: {match}} = this.props;
    return (
      <div>
        Products Container {match.params.customer}
        <ProductList products={this.props.products} addToCart={this.addToCartHandler}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    products: state.products.collection,
    isLoading: state.products.isLoading,
    isFetched: state.products.isFetched,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchProductCollection: () => dispatch(fetchProducts()),
    fetchCustomerDiscounts: () => dispatch(fetchCustomerDiscounts()),
  };
};

export default connect<StateProps, DispatchProps, {routeProps: RouteComponentProps<{ customer: string }>}>(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);

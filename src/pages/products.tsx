import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {customerModels} from '../features/customer';
import {Products} from '../features/product';
import {Cart} from '../features/adsCheckout';

export default (props: RouteComponentProps<{ customer: customerModels.CustomerId }>) => (
  <React.Fragment>
    <h1>Ad Products</h1>
    <Products routeProps={props} />
    <Cart customerId={props.match.params.customer}/>
  </React.Fragment>
);

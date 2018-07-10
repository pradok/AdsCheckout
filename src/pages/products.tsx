import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {customerModels} from '../features/customer';
import {Products} from '../features/product';
import {Cart} from '../features/adsCheckout';

export default (props: RouteComponentProps<{ customer: customerModels.CustomerId }>) => (
  <React.Fragment>
    <Products customerId={props.match.params.customer} />
    <Cart customerId={props.match.params.customer}/>
  </React.Fragment>
);

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Products from '../features/product/containers/product-container';

export default (props: RouteComponentProps<{ customer: string }>) => (
  <React.Fragment>
    <h1>Ad Products</h1>
    <Products routeProps={props} />
  </React.Fragment>
);

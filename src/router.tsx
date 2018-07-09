import * as React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';

const history = createHistory();

const router = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/products/:customer" component={Products} />
    </Switch>
  </ConnectedRouter>
);

export {router};

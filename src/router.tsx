import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/products/:customer" component={Products} />
    </Switch>
  </BrowserRouter>
);

export {router};

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Todos from './pages/todos';
import Home from './pages/home';

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/todos" component={Todos} />
    </Switch>
  </BrowserRouter>
);

export {router};

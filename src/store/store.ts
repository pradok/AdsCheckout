import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import sagas from './root-saga';

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState?: {}) {
  // configure middlewares
  const middlewares = [createEpicMiddleware(rootEpic), sagaMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

sagaMiddleware.run(sagas);

// export store singleton instance
export default store;

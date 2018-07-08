import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

const rootReducer = combineReducers({
  router: routerReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;

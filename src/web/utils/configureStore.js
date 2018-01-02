import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from '../../redux/modules';
import apiRequestMiddleware from '../../redux/middleware/apiRequestMiddleware';
import Rpc from './Rpc';

const combinedReducer = combineReducers({
  router: routerStateReducer,
  form: formReducer,
  ...reducers
});

export default function configureStore(initialState) {
  const rpc = new Rpc();
  const apiRequest = apiRequestMiddleware(rpc);
  const middleware = [thunk, apiRequest];
  const store = compose(
    applyMiddleware.apply(this, middleware),
    reduxReactRouter({ createHistory: createBrowserHistory }),
    // persistenceHandler(storage),
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)(combinedReducer, initialState);
  Rpc.dispatch = store.dispatch;
  return store;
}

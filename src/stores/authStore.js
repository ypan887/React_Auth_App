import thunk from "redux-thunk";
import createLogger from "redux-logger";
import {createStore, applyMiddleware, compose} from "redux";
import authApp from '../reducers';

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like here name, actionsBlacklist, actionsCreators or immutablejs support
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const authStore = createStore(authApp, enhancer);

export default authStore;

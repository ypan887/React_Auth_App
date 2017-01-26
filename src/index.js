import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import authStore from './stores/authStore';
import App from './containers/App';
import { requireAuthentication } from './containers/AuthenticatedComponent';
import LoggedinView from './components/LoggedinView';

// import User from '../components/User'

ReactDOM.render(
  <Provider store={authStore}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={requireAuthentication(LoggedinView)}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

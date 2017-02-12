import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import {About} from './About';
import {ItemsList} from './ItemsList';
import {Login} from './Login';
import {SingleItemView} from './SingleItemView';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={About} />
      <Route path='/items' component={ItemsList} />
      <Route path='/items/:slug' component={SingleItemView} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import {About} from './About';
import {ItemsList} from './ItemsList';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={About} />
      <Route path='/items' component={ItemsList} />
    </Route>
  </Router>,
  document.getElementById('root')
);

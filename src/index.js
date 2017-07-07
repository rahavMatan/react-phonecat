import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import promiseMiddleware from 'redux-promise-middleware';

import List from './components/list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
      <Switch>
        <Route path="/" component={List} />
      </Switch>
     </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

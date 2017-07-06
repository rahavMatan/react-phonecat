import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import App from './components/app';
import Home from './components/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
     </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

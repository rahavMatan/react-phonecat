import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import promise from "redux-promise";

import List from './components/list';
import Phone from './components/phone';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Phone} />
      </Switch>
     </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import promise from "redux-promise";
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import List from './components/list';
import Phone from './components/phone';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route render={({ location }) => (
          <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <Route location={location} key={location.key}>
              <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/:id" component={Phone} />
                <Route path="/:id/:params" render={({location})=>{
                    return ( <Redirect to="/"/>)
                  }}/>
              </Switch>
            </Route>
          </CSSTransitionGroup>
          )}
        />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));

//   <BrowserRouter>
//
// </BrowserRouter>
//
// <div>
//  <Switch>
//    <Route exact path="/" component={List} />
//    <Route path="/:id" component={Phone} />
//  </Switch>
// </div>

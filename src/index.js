import React from "react";
import { render } from "react-dom";
import { Router , browserHistory } from "react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './rootReducer';
import routes from "./routes";
import setAuthorizationToken from './utils/setAuthorizationToken';
//import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      //window.devtoolsExtension ? window.devtoolsExtension() : f => f
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
  ,document.getElementById('app')
);

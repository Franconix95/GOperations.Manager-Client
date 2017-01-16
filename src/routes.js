import React from "react";
import { Route, IndexRoute } from "react-router";

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import OctopusManagerPage from './components/octopusManager/OctopusManagerPage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings}></IndexRoute>
    <Route path="signup" component={SignupPage}></Route>
    <Route path="login" component={LoginPage}></Route>
    <Route path="new-event" component={requireAuth(NewEventPage)}></Route>
    <Route path="octopusManager" component={requireAuth(OctopusManagerPage)}></Route>
  </Route>
)

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from "../components/Home.js";
import store from '../redux/ConfigStore.js';

export default (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './view/app.jsx';
import store from './redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { NotFound } from './view/functional-components'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/login" />
        )} />
        <Route exact path='/login' component={App} />
        <Route exact path='/wall' component={App} />
        <Route exact path='/wall/:postId' component={App} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store} />, document.getElementById("root"));

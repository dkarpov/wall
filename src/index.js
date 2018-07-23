import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './view/app.jsx';
import store from './redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/:wallposts?' component={App}/>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store}/>, document.getElementById("root"));

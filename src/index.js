import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './view/app.jsx';
import store from './redux';

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, document.getElementById("root"));

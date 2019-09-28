import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./app/wall/Feed.jsx";
import ActiveWallItem from "./app/wall/ActiveWallItem.jsx";
import store from "./app/Store";
import NotFound from "./app/helpers/routes/NotFoundRoute.jsx";
import Login from "./app/login/LoginForm.jsx";
import "./style.less";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/wall" component={Feed} />
        <Route exact path="/wall/:postId" component={ActiveWallItem} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

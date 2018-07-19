import React from "react";
import ReactDOM from "react-dom";
import Login from './view/loginform.jsx';
import './view/wall.less';

const Index = () => {
  return <div>
    <Login/>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));

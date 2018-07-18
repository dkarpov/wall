import React from "react";
import ReactDOM from "react-dom";
import Login from './view/loginform.jsx';

const Index = () => {
  return <div>
    Hello Wall!
    <Login/>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));

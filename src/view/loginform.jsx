import React, { Component } from "react";
import './wall.less'
import classNames from 'classnames/bind';

class Login extends Component {
  constructor(props) {
    super(props);
  }


  handleSubmit = event => {
    event.preventDefault(event.target);
    this.props.validationCallback(this.login.value, this.pass.value)
  }

  render() {
    return (
      <div className="login-page">
        <p>Welcome</p>
        <div className="form">
          <form className="login-form">
            <input ref={node => this.login = node} type="text" placeholder="username" />
            <input ref={node => this.pass = node} type="password" placeholder="password" />
            <button onClick={this.handleSubmit}>login</button>
            <label className={classNames('warning', { enabled: this.props.warning })}>Password/Login too weak</label>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
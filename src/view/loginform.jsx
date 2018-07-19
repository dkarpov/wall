import React, { Component } from "react";
import PropTypes from 'prop-types';
import './wall.less'
import classNames from 'classnames/bind';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.pass = null;
    this.login = null;

    this.state = {
      invalidLogin: false,
    };
  }

  validateForm() {
    const strongPass = new RegExp(this.props.regExpValidator);

    if (strongPass.test(this.pass.value) && (this.login.value.length < this.props.minPassLength)) {
      console.log(this.pass.value);
      this.setState({invalidLogin: false});
    }
    else
      this.setState({invalidLogin: true});
  }

  handleSubmit = event => {
    event.preventDefault(event.target);
    this.validateForm();
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
              <label className={classNames('warning', {enabled: this.state.invalidLogin})}>Password/Login too weak</label>
          </form>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  minPassLength: 5,
  regExpValidator: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
};
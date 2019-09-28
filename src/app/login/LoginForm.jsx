import React, { Component } from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userLoggedInAction } from "../Actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = null;
    this.pass = null;

    this.state = {};
  }

  handleSubmit = event => {
    if (event) {
      event.preventDefault(event.target);
      this.validateForm(this.login.value, this.pass.value);
    }
  };

  validateForm = (login, pass) => {
    const strongPass = new RegExp(this.props.regExpValidator);
    const { userLoggedIn } = this.props;

    if (strongPass.test(pass) && login.length > this.props.minPassLength) {
      this.setState({ invalidLogin: false });
      userLoggedIn(true);
    } else {
      this.setState({ invalidLogin: true });
      userLoggedIn(false);
    }
  };

  render() {
    return !this.props.loggedIn ? (
      <div className="login-page">
        <p>Welcome</p>
        <div className="form">
          <form className="login-form">
            <input
              ref={node => (this.login = node)}
              type="text"
              placeholder="username"
            />
            <input
              ref={node => (this.pass = node)}
              type="password"
              placeholder="password"
            />
            <button onClick={this.handleSubmit}>login</button>
            <label
              className={classNames("warning", {
                enabled: this.state.invalidLogin
              })}
            >
              Password/Login too weak
            </label>
          </form>
        </div>
      </div>
    ) : (
      <Redirect to="/wall" />
    );
  }
}

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLoggedIn: userLoggedInAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login.defaultProps = {
  minPassLength: 5,
  regExpValidator: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
};

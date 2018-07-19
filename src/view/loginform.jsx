import React, { Component } from "react";
import PropTypes from 'prop-types';
import './wall.less'
import classNames from 'classnames/bind';
import { connect } from 'react-redux'

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
              <label className={classNames('warning', {enabled: this.props.warning})}>Password/Login too weak</label>
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

const mapStateToProps = state => {
  return {
    posts: []//state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loging: () =>
      dispatch({
        type: 'USER_LOGIN'
      })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
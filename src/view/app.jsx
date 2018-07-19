import React, { Component } from "react";
import Login from './loginform.jsx';
import './wall.less';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            invalidLogin: false,
            loggedIn: false
        };

    }

    validateForm = (login, pass) => {
        const strongPass = new RegExp(this.props.regExpValidator);

        if (strongPass.test(pass) && (login.length < this.props.minPassLength)) {
            console.log(pass);
            this.setState({ invalidLogin: false });
            this.setState({ loggedIn: true });
        }
        else
            this.setState({ invalidLogin: true });
    }

    componentDidMount() {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({ posts: JSON.parse(data) }));

            console.log(this.state.posts);
    }


    render() {
        return (
            <div>
                <Login validationCallback={this.validateForm} warning={this.state.invalidLogin} />
            </div>
        );
    }
}

export default App
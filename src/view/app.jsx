import React, { Component } from "react";
import Login from './loginform.jsx';
import './wall.less';

const urlPath = "https://jsonplaceholder.typicode.com/posts";

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

        if (strongPass.test(pass) && (login.length > this.props.minPassLength)) {
            this.setState({ invalidLogin: false });
            this.setState({ loggedIn: true });
        }
        else
            this.setState({ invalidLogin: true });
    }

    componentDidMount() {
        const request = new XMLHttpRequest();
        request.addEventListener("load", this.transferComplete);
        request.addEventListener("error", this.transferFailed);
        request.open("GET", urlPath);
        request.send();
    }

    transferComplete = (evt) => {
        console.log("The transfer is complete.");
        this.setState({ posts: evt.target.response });
    }

    transferFailed = (evt) => {
        console.log("An error occurred while transferring the file.", evt);
        this.setState({ error: evt.type });
    }

    render() {
        let domElement = null;

        if (this.state.error) {
            // potentially place for updating UI
            window.alert(this.state.error);
        }

        if (this.state.loggedIn && this.state.posts.length) {
            console.log(this.state.posts)
            const posts = Array.from(this.state.posts).map((post) =>
                <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            );

            domElement =
                <div>
                    <input className='search' placeholder="search posts" />
                    <div className='flex-container'>
                        {posts}
                    </div>
                </div>
        }
        else
            domElement = <Login validationCallback={this.validateForm} warning={this.state.invalidLogin} />

        return (
            <div>{domElement}</div>
        );
    }
}

App.defaultProps = {
    minPassLength: 5,
    regExpValidator: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
};

export default App

function Post({id, title, body}) {
    
    return (
        <div className='flex-item'>
            TEST POST
        </div>
    );
}
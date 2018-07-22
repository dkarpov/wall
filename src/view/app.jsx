import React, { Component } from "react";
import Login from './loginform.jsx';
import './wall.less';
import {Post} from './post';
import {Header} from './header';

const urlPath = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            invalidLogin: false,
            loggedIn: false,
            filterString: null
        };
    }

    validateForm = (login, pass) => {
        const strongPass = new RegExp(this.props.regExpValidator);

        if (/*strongPass.test(pass) &&*/ (login.length > this.props.minPassLength)) {
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
        const posts = JSON.parse(evt.target.response).reverse();
        this.setState({ posts });
    }

    transferFailed = (evt) => {
        console.log("An error occurred while transferring the file.", evt);
        this.setState({ error: evt.type });
    }

    updateSearchString = (searchStr) => {
        console.log('updateSearchString', searchStr);
        this.setState({
            filterString: searchStr
        });
    }

    postsFilterFunction = (post) => {
        const filterString = this.state.filterString;

        if (!filterString || filterString.length == 0)
            return true;

        if (post.title.includes(filterString) || post.body.includes(filterString))
            return true;
        else
            return false;
    }

    render() {
        let domElement = null;

        if (this.state.error) {
            // potentially place for updating UI
            window.alert(this.state.error);
        }

        if (this.state.loggedIn && this.state.posts.length) {
            const fitleredPosts = this.state.posts.reverse().filter(this.postsFilterFunction);
            const posts = fitleredPosts.map((post) =>
                <Post key={post.id} {...post}/>
            );

            domElement =
                <div>
                    <Header updateSearch={this.updateSearchString}/>
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
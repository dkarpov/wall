import React, { Component } from "react";
import { connect } from 'react-redux';
import Login from './loginform.jsx';
import './wall.less';
import Post from './post.jsx';
import { Header, OpenedPost } from './functional-components';
import { bindActionCreators } from 'redux';
import { openPostActon, closePostActon } from '../redux/actions';

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

    openPost = (postId) => {
        this.setState({ openedPost: postId });
    }

    getFilteredPosts = () => {
        const fitleredPosts = this.state.posts.filter(this.postsFilterFunction);
        const posts = fitleredPosts.map((post) => {
            return (<Post key={post.id} {...post} />);
        });

        return posts;
    }

    logOut = () => {
        this.setState({ invalidLogin: false });
        this.setState({ loggedIn: false });
    }

    render() {
        let domElement = null;

        if (this.state.error) {
            // potentially place for updating UI
            window.alert(this.state.error);
        }

        if (this.state.loggedIn && this.props.wallPostId /*&& this.props.openedPost*/) {
            console.log(this.props.wallPostId);
            console.log(this.props);
            const post = this.state.posts.filter((post) => {
                return post.id == this.props.wallPostId;
            })[0];
            const mergedProps = {...post, closePostAction: this.props.closePostActon}

            domElement = <OpenedPost {...mergedProps}/>
        }
        else if (this.state.loggedIn && this.state.posts.length) {
            const posts = this.getFilteredPosts();
            domElement = <div>
                <Header updateSearch={this.updateSearchString} logOut={this.logOut}/>
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

const mapStateToProps = (state, ownProps) => ({ 
    openedPost: state.openedPost, wallPostId: ownProps.match.params.postId});
const mapDispatchToProps = dispatch => bindActionCreators({ openPostActon, closePostActon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchInput from "./SearchInput.jsx";
import { bindActionCreators } from "redux";
import { userLoggedOutAction, dataRecevidedAction } from "../Actions";
import WallItem from "./WallItem.jsx";

const urlPath = "https://jsonplaceholder.typicode.com/posts";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { filterString: null };
    this.request;
  }

  componentDidMount() {
    let { request } = this;

    // requests should ve handled by service TBD
    if (this.props.loggedIn) {
      request = new XMLHttpRequest();
      request.addEventListener("load", this.transferComplete);
      request.addEventListener("error", this.transferFailed);
      request.open("GET", urlPath);
      request.send();
    }
  }

  componentWillUnmount() {
    let { request } = this;
    if (this.props.loggedIn && request) {
      request.removeEventListener("load", this.transferComplete);
      request.removeEventListener("error", this.transferFailed);
      request = null;
    }
  }

  transferComplete = evt => {
    const posts = JSON.parse(evt.target.response).reverse();
    this.props.dataRecevidedAction(posts);
  };

  transferFailed = evt => {
    window.alert("An error occurred while transferring the data.");
    this.setState({ error: evt.type });
  };

  getFilteredPosts = () => {
    const fitleredPosts = this.props.posts.filter(this.postsFilterFunction);
    const posts = fitleredPosts.map(post => {
      return <WallItem key={post.id} {...post} />;
    });

    return posts;
  };

  updateSearchString = searchStr => {
    this.setState({
      filterString: searchStr
    });
  };

  postsFilterFunction = post => {
    const filterString = this.state.filterString;

    if (!filterString || filterString.length == 0) return true;

    if (post.title.includes(filterString) || post.body.includes(filterString))
      return true;
    else return false;
  };

  render() {
    if (this.state.error) {
      window.alert(this.state.error);
    }

    const posts =
      this.props.loggedIn && this.props.posts.length && this.getFilteredPosts();

    return posts ? (
      <div>
        <SearchInput
          updateSearch={this.updateSearchString}
          logOut={() => this.props.userLoggedOut(false)}
        />
        <div className="flex-container">{posts}</div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = ({ posts, loggedIn }) => ({ posts, loggedIn });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userLoggedOut: userLoggedOutAction,
      dataRecevidedAction
    },
    dispatch
  );

Feed.defaultProps = {
  url: urlPath
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

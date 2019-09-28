import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closePostAction } from "../Actions";
import { Redirect } from "react-router-dom";

const ActiveWallItem = props => {
  const post = props.posts.filter(post => {
    return post.id == props.match.params.postId;
  })[0];

  return post ? (
    <div className="openedPost">
      <Link to={`/wall`}>
        <button onClick={evt => props.closePostActon()}>Go back</button>
      </Link>
      <div className="postContent">
        <h1>Details</h1>
        <span>{`USerID: ${post.id}`}</span>
        <span>{`ID: ${post.userId}`}</span>
        <span>{`Title: ${post.title}`}</span>
        <span>{`Body: ${post.body}`}</span>
      </div>
    </div>
  ) : (
    <Redirect to="/wall" />
  );
};

const mapStateToprops = ({ posts }) => ({ posts });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closePostActon: closePostAction
    },
    dispatch
  );

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(ActiveWallItem);

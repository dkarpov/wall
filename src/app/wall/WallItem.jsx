import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { openPostAction } from "../Actions";

const WallItem = props => {
  const postId = props.id;
  return (
    <Link
      to={`/wall/${postId}`}
      className="flex-item"
      onClick={event => props.openPostActon(postId)}
    >
      <div>
        <span className="post-text">User id: {postId}</span>
        <span className="post-text title">Title: {props.title}</span>
      </div>
    </Link>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openPostActon: openPostAction }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(WallItem);

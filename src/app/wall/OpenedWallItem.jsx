import React from "react";
import { Link } from "react-router-dom";

const OpenedWallItem = props => {
  console.log(props);
  return (
    <div className="openedPost">
      <Link to={`/wall`}>
        <button onClick={evt => props.closePostAction()}>Go back</button>
      </Link>
      <div className="postContent">
        <h1>Details</h1>
        <span>{`USerID: ${props.id}`}</span>
        <span>{`ID: ${props.userId}`}</span>
        <span>{`Title: ${props.title}`}</span>
        <span>{`Body: ${props.body}`}</span>
      </div>
    </div>
  );
};

export default OpenedWallItem;

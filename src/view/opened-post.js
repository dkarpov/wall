import React from "react";

const OpenedPost = (props) => {
    console.log(props);
    return (
        <div className='openedPost'>
            <button onClick={(evt) => props.closePostAction()}>Go back</button>
            <div className='postContent'>
                <h1>Details</h1>
                <span>{`USerID: ${props.id}`}</span>
                <span>{`ID: ${props.userId}`}</span>
                <span>{`Title: ${props.title}`}</span>
                <span>{`Body: ${props.body}`}</span>
            </div>
        </div>
    );
}

export { OpenedPost };

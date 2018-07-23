import React from "react";
import { NavLink } from 'react-router-dom';

const OpenedPost = (props) => {
    console.log(props);
    return (
            <div className='openedPost'>
                <NavLink to={`/`}>
                    <button onClick={(evt) => props.closePostAction()}>Go back</button>
                </NavLink>
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

import React from "react";

function Post ({id, title, body}) {
    return (
        <div className='flex-item'>
            <span className='post-text'>User id: {id}</span>
            <span className='post-text title'>Title: {title}</span>
        </div>
    );
}

export { Post };
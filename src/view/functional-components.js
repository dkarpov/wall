import React from "react";
import { Link } from 'react-router-dom';

function Header({updateSearch, logOut}) {
    return (
        <div className='header'>
            <button onClick={(evt) => logOut()}>Log out</button>
            <input className='search'
                placeholder="search posts"
                onKeyDown={handleSearch.bind(updateSearch)}
            />
        </div>

    );
}

function handleSearch(event) {
    // react event pooling
    event.persist();
    console.log(this);

    setTimeout(() => {
        const searchQueryStr = event.target.value;

        if (searchQueryStr && searchQueryStr.trim().length > 0) {
            this(searchQueryStr);
        }
    }, 1000);
}

// OPENED POST

const OpenedPost = (props) => {
    console.log(props);
    return (
            <div className='openedPost'>
                <Link to={`/wall`}>
                    <button onClick={(evt) => props.closePostAction()}>Go back</button>
                </Link>
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

const NotFound = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

export default NotFound;

export { Header, OpenedPost, NotFound };

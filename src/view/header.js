import React from "react";

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

export { Header };

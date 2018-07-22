import React from "react";

function Header(updateSearch) {
    return (
        <div className='header'>
            <button>Log out</button>
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

    setTimeout(() => {
        console.log(this, event);
        const searchQueryStr = event.target.value;

        if (searchQueryStr && searchQueryStr.trim().length > 0) {
            console.log(searchQueryStr);
            this.updateSearch(searchQueryStr);
        }
    }, 500);
}

export { Header };

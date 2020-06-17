import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchHeroes }) => {

    const onSearch = (event) => {
        const text = event.target.value;
        searchHeroes(text)
    }

    return (
        <nav className="SearchBar">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required onChange={onSearch} />
                        <label className="label-icon" htmlFor="search"></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>

    );
}

export { SearchBar };
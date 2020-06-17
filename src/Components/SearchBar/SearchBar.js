import React from 'react';

const SearchBar = ({ searchHeroes }) => {

    const onSearch = (event) => {
        const text = event.target.value;
        searchHeroes(text)
    }

    return (
        <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input id="search" type="search" required onChange={onSearch} />
                        <label class="label-icon" for="search"></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>

    );
}

export { SearchBar };
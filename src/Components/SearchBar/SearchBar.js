import React from "react";

import style from "./SearchBar.module.css";

const SearchBar = ({ searchHeroes }) => {
  const onSearch = (event) => {
    const text = event.target.value;
    searchHeroes(text);
  };

  return (
    <nav className={style.wrapper}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required onChange={onSearch} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export { SearchBar };

import React from "react";

import style from "./SearchBar.module.css";

const SearchBar = ({ searchHeroes }) => {
  const onSearch = (event) => {
    if (event.charCode === 13) {
      const text = event.target.value;
      searchHeroes(text);
    }
  };

  return (
    <nav className={style.wrapper}>
      <div className="nav-wrapper">
        <div className="input-field">
          <input id="search" type="search" required onKeyPress={onSearch} />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </div>
    </nav>
  );
};

export { SearchBar };

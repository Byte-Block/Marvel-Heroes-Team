import React from "react";

import style from "./SearchBar.module.css";

const SearchBar = ({ searchHeroes }) => {
  const onSearch = (event) => {
    try {
      if (event.charCode === 13) {
        const text = event.target.value;
        searchHeroes(text);
      }
    } catch (error) {
      console.log("Error: ", error);
      alert("Error: ", error);
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

import React from "react";
import style from "./Header.module.css";

import { Navbar, Icon } from "react-materialize";

const Header = () => {
  return (
    <Navbar
      className={style.wrapper}
      alignLinks="right"
      brand={
        <a
          className={`brand-logo ${style.btn}`}
          href="https://www.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hero Team
        </a>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    ></Navbar>
  );
};

export { Header };

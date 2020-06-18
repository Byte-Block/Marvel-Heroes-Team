import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`page-footer ${style.ftr}`}>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.marvel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marvel Heroes
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

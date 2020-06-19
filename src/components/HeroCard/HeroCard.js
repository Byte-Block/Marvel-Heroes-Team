import React from "react";
import PropTypes from "prop-types";
import "./HeroCard.css";

const HeroCard = ({ avatar, name }) => {

  return (
    <div className="col s4">
      <div className="card HeroCard">
        <span className="card-title HeroCard__Title">{name}</span>
        <div className="card-image HeroCard__Card-Image">
          <img
            className="HeroCard__Image"
            src={
              avatar
                ? `${avatar}/portrait_small.jpg`
                : "https://via.placeholder.com/200x300/FF0000/FFFFFF?text=MARVEL.com"
            }
            alt="avatar"
          />
        </div>
        <div className="card-action HeroCard__Buttons">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Info
          </button>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};


HeroCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
};

HeroCard.defaultProps = {
  name: "Bruce Wayne",
  avatar: "https://www.fishandcherries.com/wp-content/uploads/2017/02/Batman-Return-of-the-Caped-Crusaders-2016-movie-poster-200x300.jpg"
};


export { HeroCard };

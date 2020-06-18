import React from "react";
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

export { HeroCard };

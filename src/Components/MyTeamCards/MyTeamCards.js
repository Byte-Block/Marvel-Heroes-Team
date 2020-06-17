import React from "react";
import "./MyTeamCards.css";

const MyTeamCards = ({ avatar, name }) => {
  return (
    <div className="MyTeamCards__Wrapper">
      <div className="MyTeamCards__Cards">
        <img
          className="MyTeamCards__Img"
          src={`${avatar}/portrait_small.jpg`}
          alt="avatar"
        />
        <p className="MyTeamCards__Text">{name}</p>
      </div>
    </div>
  );
};

export { MyTeamCards };

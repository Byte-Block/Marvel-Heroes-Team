import React from "react";
import "./MyTeamCards.css"


const MyTeamCards = ({ avatar, name }) => {
    return (
        <div className="MyTeamCards__wrapper">

            <div className="MyTeamCards__Cards">
                <img
                    className="MyTeamCards__img"
                    src={`${avatar}/portrait_small.jpg`}
                    alt="avatar"
                />
                <p className="MyTeamCards__text">{name}</p>
            </div>
        </div>
    )
}

export { MyTeamCards };
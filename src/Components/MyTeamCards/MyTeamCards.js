import React from "react";
import "./MyTeamCards.css"


const MyTeamCards = () => {
    const Cards = {
        img: [],
        name: ""
    }

    return (
        <div className="MyTeamCards__wrapper">
            <h3>My Team</h3>
            <div className="MyTeamCards__Cards">
                <img
                    className="MyTeamCards__img"
                    src="https://www.gravatar.com/avatar/7e711dd6a1cdca3576e5cf6f69f3df4b?s=256"
                    alt="avatar"
                />
                <p className="MyTeamCards__text">Thanos</p>
            </div>
        </div>
    )
}

export { MyTeamCards };
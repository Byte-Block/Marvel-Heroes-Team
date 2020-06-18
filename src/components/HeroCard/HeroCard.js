import React from "react";
import "./HeroCard.css";

import { Row, Col } from "react-materialize";

const HeroCard = ({ avatar, name }) => {
  return (
    <Row>
      <Col s={9}>
        <div className="row">
          <div className="col s4">
            <div className="card HeroCard">
              <span className="card-title HeroCard__Title">{name}</span>
              <div className="card-image HeroCard__Card-Image">
                <img
                  className="HeroCard__Image"
                  src={`${avatar}/portrait_small.jpg`}
                  alt='avatar'
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
        </div>
      </Col>
    </Row>
  );
};

export { HeroCard };

import React from "react";
import "./Card.css";
import { AiFillCheckSquare } from "react-icons/ai";

const Card = ({ isactive, heading }) => {
  return (
    <div className={isactive ? "active" : "card__container"}>
      <div className="heading">
        <h2>{heading}</h2>
        <h5>For those getting started</h5>
      </div>
      <div className="desc">
        <div className="point">
          <AiFillCheckSquare />1 Website
        </div>
        <div className="point">
          <AiFillCheckSquare />
          500MB Bandwidth
        </div>
        <div className="point">
          <AiFillCheckSquare />
          Free SSL Certificate
        </div>
      </div>
      <div className="price">
        <h1>$14.99</h1>
      </div>
      <button className={isactive ? "active__btn" : "btn"}>ADD TO CART</button>
    </div>
  );
};

export default Card;

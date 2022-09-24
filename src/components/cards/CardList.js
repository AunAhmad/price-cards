import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  return (
    <section>
      <div className="container cardlist__container">
        <div className="cardlist">
          <Card isactive heading="Starter" />
        </div>
        <div className="cardlist">
          <Card heading="Premium" />
        </div>
        <div className="cardlist">
          <Card isactive heading="Ultimate" />
        </div>
      </div>
    </section>
  );
};

export default CardList;

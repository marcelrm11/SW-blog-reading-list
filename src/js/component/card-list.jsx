import React from "react";
import { CardGroup } from "react-bootstrap";
import MyCard from "./my-card.jsx";

function CardList({ obj, group }) {
  const list = obj.results.map((item) => {
    return <MyCard item={item} key={item.uid} group={group} />;
  });
  return <CardGroup>{list}</CardGroup>;
}

export default CardList;

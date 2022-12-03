import React from "react";
import MyCard from "./my-card.jsx";

function CardList({ list }) {
  const result = list.map((item, index) => {
    return <MyCard item={item} key={index} />;
  });
  return <div>{result}</div>;
}

export default CardList;

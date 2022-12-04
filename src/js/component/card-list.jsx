import React from "react";
import MyCard from "./my-card.jsx";

function CardList({ obj, group }) {
  const list = obj.results.map((item) => {
    return <MyCard item={item} key={item.uid} group={group} />;
  });
  return (
    <>
      <h3>{group.toUpperCase()}</h3>
      <div className="horiz-group">{list}</div>
    </>
  );
}

export default CardList;

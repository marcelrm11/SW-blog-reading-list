import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardList from "../component/card-list.jsx";
import { Context } from "../store/appContext";

function Home() {
  const { store, actions } = useContext(Context);
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;
  // console.log("store people:", peopleObj);

  return (
    <div className="text-center mt-5">
      <h1>STAR WARS</h1>
      <h3>PEOPLE</h3>
      {peopleObj ? (
        <CardList obj={peopleObj} group="people" />
      ) : (
        "loading people"
      )}
      <h3>PLANETS</h3>
      {planetsObj ? (
        <CardList obj={planetsObj} group="planets" />
      ) : (
        "loading planets"
      )}
      <h3>VEHICLES</h3>
      {vehiclesObj ? (
        <CardList obj={vehiclesObj} group="vehicles" />
      ) : (
        "loading vehicles"
      )}
    </div>
  );
}

export default Home;

import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardList from "../component/card-list.jsx";
import { Context } from "../store/appContext";

function Home() {
  const { store, actions } = useContext(Context);
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;

  return (
    <section className="container container-home">
      <h1>STAR WARS</h1>
      {peopleObj ? (
        <CardList obj={peopleObj} group="people" />
      ) : (
        "loading people"
      )}
      {planetsObj ? (
        <CardList obj={planetsObj} group="planets" />
      ) : (
        "loading planets"
      )}
      {vehiclesObj ? (
        <CardList obj={vehiclesObj} group="vehicles" />
      ) : (
        "loading vehicles"
      )}
    </section>
  );
}

export default Home;

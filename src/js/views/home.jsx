import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardList from "../component/card-list.jsx";
import { Context } from "../store/appContext";

function Home() {
  const { store, actions } = useContext(Context);
  let peopleList, planetsList, vehiclesList;
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;

  if (peopleObj) {
    // this 'if' is the key for the view to wait for data for rendering
    const people = peopleObj.results;
    peopleList = people.map((person, i) => {
      console.log(person);
      return <li key={i}>{person.name}</li>; // only has id, name and url. use url to fetch other properties
    });
  }

  if (planetsObj) {
    // this 'if' is the key for the view to wait for data for rendering
    const planets = planetsObj.results;
    planetsList = planets.map((planet, i) => {
      console.log(planet);
      return <li key={i}>{planet.name}</li>; // only has id, name and url. use url to fetch other properties
    });
  }

  if (vehiclesObj) {
    // this 'if' is the key for the view to wait for data for rendering
    const vehicles = vehiclesObj.results;
    vehiclesList = vehicles.map((vehicle, i) => {
      console.log(vehicle);
      return <li key={i}>{vehicle.name}</li>; // only has id, name and url. use url to fetch other properties
    });
  }

  return (
    <div className="text-center mt-5">
      <h1>Hello Marcel!</h1>
      <p>
        <img src="https://picsum.photos/200" />
      </p>
      <ul>{peopleList}</ul>
      <ul>{planetsList}</ul>
      <ul>{vehiclesList}</ul>
    </div>
  );
}

export default Home;

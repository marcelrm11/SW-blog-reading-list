import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function MyCard({ item, group }) {
  const { store, actions } = useContext(Context);
  return (
    <Card className="small-card">
      <Card.Img
        variant="top"
        src={item.imgURL}
        alt={`picture of ${item.name}
        should go here
        May the Force be with You`}
      />
      <Card.Body>
        <Card.Title>
          {item.uid} - {item.name}
        </Card.Title>
        {/* <Card.Text> */}
        {group === "people" ? (
          <ul>
            <li>Birth year: {item.birth_year}</li>
            <li>Height: {item.height} cm</li>
            <li>Weight: {item.mass} kg</li>
          </ul>
        ) : group === "planets" ? (
          <ul>
            <li>Climate: {item.climate}</li>
            <li>Day Length: {item.rotation_period} hours</li>
            <li>Population: {item.population} hab.</li>
          </ul>
        ) : group === "vehicles" ? (
          <ul>
            <li>Cost: ${item.cost_in_credits}</li>
            <li>Passengers: {item.passengers} pax</li>
            <li>Length: {item.length} m</li>
          </ul>
        ) : (
          "loading"
        )}
        {/* </Card.Text> */}
        <Button variant="success">
          <Link to={`${group}/${item.uid}`}>Go somewhere</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

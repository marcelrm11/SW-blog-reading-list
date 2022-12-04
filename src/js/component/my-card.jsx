import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function MyCard({ item, group }) {
  const { store, actions } = useContext(Context);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/100/180" />
      <Card.Body>
        <Card.Title>
          {group}, {item.uid}: {item.name}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to={`${group}/${item.uid}`}>Go somewhere</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

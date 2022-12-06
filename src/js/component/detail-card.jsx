import React from "react";
import { Card } from "react-bootstrap";

const peopleProperties = [
  "height",
  "mass",
  "hair_color",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender",
]; // add homeworld? films? etc.

function DetailCard({ element }) {
  const properties = Object.entries(element).map(([key, value]) => {
    if (peopleProperties.includes(key)) {
      key = key.replace("_", " ");
      key = key[0].toUpperCase() + key.substring(1);
      return (
        <React.Fragment key={key}>
          <label htmlFor={key}>{key}:</label>
          <span name={key}>
            {value}
            {key === "Height" ? "cm" : key === "Mass" ? "kg" : ""}
          </span>
          <br />
        </React.Fragment>
      );
    }
    return;
  });
  return (
    <article>
      <Card className="detail-card">
        <Card.Header as="h3">{element.name}</Card.Header>
        <Card.Body className="detail-card-body">
          <Card.Img src={element.imgURL} />
          <Card.Text>{properties}</Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default DetailCard;

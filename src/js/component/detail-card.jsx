import React from "react";
import { Card } from "react-bootstrap";

function DetailCard({ element }) {
  const properties = Object.entries(element).map(([key, value]) => {
    return (
      <React.Fragment key={key}>
        <label htmlFor={key}>{key}:</label>
        <span name={key}> {value}</span>
        <br />
      </React.Fragment>
    );
  });
  return (
    <article>
      <Card className="detail-card">
        <Card.Header as="h3">{element.name}</Card.Header>
        <Card.Img src={element.imgURL} />
        <Card.Body>
          <Card.Text>{properties}</Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default DetailCard;

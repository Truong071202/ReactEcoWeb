import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import card_coll from "../img/image 978.png";
import { Link } from "react-router-dom";

const API_CARD = "https://jsonplaceholder.typicode.com/albums";

const Collection = () => {
  const [inforCard, setInfoCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_CARD); // Correct the fetch statement
        const data = await response.json();
        setInfoCard(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container py-4">
        <div className="box-card-collection">
          {inforCard.map((card) => (
            <Card
              className="card-information"
              key={card.id}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={card_coll} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-coll-card" to="/product">
                    Learn More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;

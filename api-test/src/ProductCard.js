import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ProductCard({ product }) {
  console.log(product);
  return (
    <Card className="text-center m-2">
      <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} className="img-fluid" />
      <Card.Body>
        <Card.Title>{product.title.slice(0, 20)}...</Card.Title>
        <Card.Text>$ {product.price}</Card.Text>
        <Link style={{ textDecoration: "none", color: "white" }} to={`/view/${product.id}`}>
          <Button className="btn">View Options</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

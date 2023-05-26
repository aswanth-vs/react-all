import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Image } from "react-bootstrap";

function ViewProduct() {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setproduct(data);
    };
    fetchData();
  }, []);
  console.log(product);

  return (
    <>
      <Row className="p-5">
        <Col sm={12} md={3}>
          <Image src={product.image} className="rounded border" fluid />
        </Col>
        <Col md={1}></Col>
        <Col md={8} className="fs-5">
          <p className="fw-bolder" style={{ textTransform: "capitalize" }}>
            {product.category}
          </p>
          <h2 className="text-center mt-5 mb-3">{product.title}</h2>
          <p className="fst-italic ">{product.description}</p>
          {/* <p>Rating: {product.rating.rate} </p> */}
          <p className="fw-bold">${product.price}</p>
        </Col>
      </Row>
    </>
  );
}

export default ViewProduct;

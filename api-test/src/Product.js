import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ViewProduct from "./ViewProduct";
import ProductCard from "./ProductCard";

function Product() {
  const [allProducts, setallProducts] = useState([]);
  //   const base_url = "http://localhost:4000";
  //code for api call
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setallProducts(response.data);
  };
  console.log(allProducts);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Row className="mx-5 py-5">
      {allProducts.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default Product;

import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./CartItems.css";
//REDUX
import { connect } from "react-redux";

const CartItems = ({ item }) => {
  const { name, img, price, total, numbers } = item;

  return (
    <Row className="text-center text-capitalize my-2">
      <Col xs={2} className="mx-auto">
        <Image
          src={img}
          alt="products"
          className="cartImg"
        />
      </Col>
      <Col xs={2} className="mx-auto">
        {name}
      </Col>
      <Col xs={2} className="mx-auto">
        {price} $
      </Col>
      <Col xs={2} className="mx-auto">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1">-</span>
            <span className="btn btn-black mx-1">{numbers}</span>
            <span className="btn btn-black mx-1">+</span>
          </div>
        </div>
      </Col>
      <Col xs={2} className="mx-auto">
        <div className="cart-icon">
          <i className="fa fa-trash" />
        </div>
      </Col>
      <Col xs={2} className="mx-auto">
        {total} $
      </Col>
    </Row>
  );
};
export default connect(null)(CartItems);

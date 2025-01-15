import React from "react";
import { Col, Card } from "antd";

const { Meta } = Card;

const Product = (props) => {
	const {id, title, price, image} = props;
  return (
    <Col span={5}>
      <Card
        hoverable
        style={{ width: 240, height:450 }}
        cover={
          <img
            alt="example"
            src={image}
          />
        }
      >
        <Meta title={title} description={`$${price}`} />
      </Card>
    </Col>
  );
};

export default Product;

import React from "react";
import { Col, Card, Button } from "antd";

const { Meta } = Card;

const Product = (props) => {
  const { itemData, cart, setCart } = props;
  const { title, price, image } = itemData;
	const addToCart = () => {
		setCart((curr) => {
			curr = [...curr, itemData]

			console.log(curr)
			return curr
		})
	}
  return (
    <Col span={5}>
      <Card
        hoverable
        style={{ width: 240, height: 450 }}
        cover={<img alt="example" src={image} style={{ maxHeight: 340 }} />}
      >
        <Meta title={title} description={`$${price}`} />
        <Button type="primary" onClick={addToCart}>
          Agregar
        </Button>
      </Card>
    </Col>
  );
};

export default Product;

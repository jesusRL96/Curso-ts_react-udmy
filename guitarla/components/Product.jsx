import React from "react";
import { Col, Card, Button, Space } from "antd";

const { Meta } = Card;

const Product = (props) => {
  const { itemData, cart, addToCart } = props;
  const { title, price, image } = itemData;
  const found = cart.find((item) => item.id === itemData.id);
  return (
    <Col span={5}>
      <Card
        hoverable
        style={{ width: 240, height: 450 }}
        cover={<img alt="example" src={image} style={{ maxHeight: 340 }} />}
      >
        <Meta title={title} description={`$${price}`} />
        <Space>
          <Button
            type="primary"
            onClick={() => {
              addToCart(itemData);
            }}
          >
            Agregar
          </Button>
          {found && (
            <p>
              <span>{found.cantidad}</span> Agregado(s)
            </p>
          )}
        </Space>
      </Card>
    </Col>
  );
};

export default Product;

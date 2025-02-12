import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Image, Space, Table } from "antd";
import React from "react";

const CartSummary = ({ cart, addItem, removeItem, onClose, open }) => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
      render: (text) => text.substring(0, 100) + "...",
    },
    {
      title: "Imagen",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image width={100} src={image} />,
    },
    {
      title: "Precio unitario",
      dataIndex: "price",
      key: "price",
      render: (price) => "$" + price,
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "candidad",
      render: (_, record) => {
        return (
          <>
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => addItem(record.id)}
            />
            {record.cantidad}
            <Button
              shape="circle"
              icon={<MinusOutlined onClick={() => removeItem(record.id)} />}
            />
          </>
        );
      },
    },
    {
      title: "Precio",
      dataIndex: "price",
      render: (_, record) => "$" + record.price * record.cantidad,
    },
  ];

  return (
    <Drawer title="Carrito" size="large" onClose={onClose} open={open}>
      <Space direction="vertical" size="small">
        <Table columns={columns} dataSource={cart} rowKey="id"></Table>
        <Divider />
        <div>
          <h3 style={{ display: "inline" }}>Total:</h3>
          <span>
            {" "}
            ${cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)}
          </span>
        </div>
      </Space>
    </Drawer>
  );
};

export default CartSummary;

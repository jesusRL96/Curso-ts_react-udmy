import { Drawer, Image, Space, Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Nombre",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
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
    render: (image) => (
      <Image
        width={100}
        src={image}
      />
    ),
  },
  {
    title: "Precio",
    dataIndex: "price",
    key: "price",
    render: (price) => "$" + price,
  },
  // {
  //   title: "Cantidad",
  //   dataIndex: "cantidad",
  //   key: "candidad",
  // },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const CartSummary = ({ cart, onClose, open }) => {
  return (
    <Drawer title="Carrito" size="large" onClose={onClose} open={open}>
      <Table columns={columns} dataSource={cart} rowKey="id"></Table>
    </Drawer>
  );
};

export default CartSummary;

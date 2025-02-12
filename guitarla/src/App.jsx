import Products from "../components/Products";
import CartSummary from "../components/CartSummary";
import { Avatar, Badge, Layout, theme } from "antd";
import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import useCart from "./hooks/useCart";

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // Cart
  const initialCart = localStorage.getItem("cart");
  const { cart, setCart, addToCart, addItem, removeItem } =
    useCart(initialCart);
  // Drawler
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, cart);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: "white" }}>Fake Store</h1>
        <Badge
          count={cart.reduce((acc, item) => acc + item.cantidad, 0)}
          showZero
          onClick={showDrawer}
        >
          <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
        </Badge>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Products cart={cart} addToCart={addToCart} />
          <CartSummary
            cart={cart}
            open={open}
            onClose={onClose}
            addItem={addItem}
            removeItem={removeItem}
          ></CartSummary>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;

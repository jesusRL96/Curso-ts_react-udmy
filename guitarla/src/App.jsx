import { useState } from "react";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";
import { Avatar, Badge, Layout, theme } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
	// Cart
  const [cart, setCart] = useState([]);
	// Drawler
	const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


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
        <Badge count={cart.length} showZero onClick={showDrawer}>
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
          <Products cart={cart} setCart={setCart} />
					<CartSummary cart={cart} open={open} onClose={onClose}></CartSummary>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;

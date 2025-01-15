import Products from "../components/Products";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
	const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
	
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
				<h1 style={{color: "white"}}>Fake Store</h1>
      </Header>
      <Content style={{ padding: "0 48px"}}>
        <div 
				style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG
          }}>
					<Products/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;

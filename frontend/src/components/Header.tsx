import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { Header } = Layout;
  const navigate = useNavigate();

  return (
    <Header style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <a href="/">Home</a>
      <Button type="primary" onClick={() => navigate("/add-product")}>
        Create product
      </Button>
    </Header>
  );
}

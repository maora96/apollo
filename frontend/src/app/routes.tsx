import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AddProduct from "../pages/add-product";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

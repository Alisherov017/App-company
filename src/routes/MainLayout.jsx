import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ProductList from "../components/productList/ProductList";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Outlet />
    </div>
  );
};

export default MainLayout;

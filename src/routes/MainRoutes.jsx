import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import FavoritesList from "../components/favorite/FavoriteList";
import ProductList from "../components/productList/ProductList";
import ErrorPage from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/favorite", element: <FavoritesList /> },
      { path: "/", element: <ProductList /> },
    ],
  },
]);

export default router;

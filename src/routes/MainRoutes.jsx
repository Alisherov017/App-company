import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      // { path: "/", element: <Login /> },
    ],
  },
]);

export default router;

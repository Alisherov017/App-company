import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      // { path: "/", element: <Login /> },
      // { path: "/start", element: <Start /> },
      // { path: "/tell", element: <TellSection /> },
      // { path: "/bubble", element: <Bubble /> },
    ],
  },
]);

export default router;

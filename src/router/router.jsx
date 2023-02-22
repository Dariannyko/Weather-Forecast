import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Help } from "../pages/help";
import { Forecast } from "../pages/forecast";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Forecast /> },
      { path: "help", element: <Help /> },
    ],
  },
]);

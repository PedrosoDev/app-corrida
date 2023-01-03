import HomePage from "./pages/HomePage";

import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

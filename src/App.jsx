import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layout/Applayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};

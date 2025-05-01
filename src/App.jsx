import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layout/Applayout";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Protfolio } from "./pages/Protfolio";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skills />,
      },
      {
        path: "/portfolio",
        element: <Protfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

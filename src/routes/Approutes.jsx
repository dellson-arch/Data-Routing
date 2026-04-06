import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
const Approutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about/:id", //agar dynamic cheez deni ho toh sabse pehle idhar lagana 
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path:'/',
      element: <AuthLayout/>,
      children:[
        {
          path:"login", // This makes Login show up at exactly "/auth"
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;

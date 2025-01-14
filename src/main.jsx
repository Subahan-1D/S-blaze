import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Registration from "./pages/Register/Register.jsx";
import Blogs from "./pages/Blogs.jsx";
import Error from "./ErrorElement/Error.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </>
);

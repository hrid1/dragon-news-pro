import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Regsiter";
import SingleNews from "../pages/SingleNews/SingleNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Navigate to={"/category/01"}></Navigate>,
          },
          {
            path: "/category/:id",
            element: <CategoryNews />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/news",
        element: <h2>News Layout</h2>,
      },
      {
        path: "/singleNews/:id",
        element: <SingleNews>News Layout</SingleNews>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/about",
    element: <h2>Login layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);

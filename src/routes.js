import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HealthyEating from "./pages/HealthyEating";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { useEffect } from "react";

export default function Router() {
  const local = localStorage.getItem("data");

  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/healthy-eating",
      element: <HealthyEating />,
    },

    {
      path: "/detail/:id",
      element: local ? <Detail /> : <Login />,
    },
    {
      path: "/detail",
      element: local ? <Detail /> : <Login />,
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

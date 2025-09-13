// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

// Views existentes
import Inicio from "./views/Inicio";
import Perfil from "./views/Perfil";
import Favoritos from "./views/Favoritos";
import Login from "./views/Login";

// Nuevas views
import Dashboard from "./views/Dashboard";
import Resultados from "./views/Resultados";
import DetallePlanta from "./views/DetallePlanta";
import ConfiguracionPreferencias from "./views/ConfiguracionPreferencias";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/favoritos", element: <Favoritos /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/resultados", element: <Resultados /> },
      { path: "/planta/:id", element: <DetallePlanta /> }, 
      { path: "/preferencias", element: <ConfiguracionPreferencias /> },
    ],
  },
  // Rutas sin Navbar
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

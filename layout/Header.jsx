import React from "react";
import { Button } from "@mui/material";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import Login from "../pages/auth/login.jsx";

import "../App.css";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-yellow-700 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ogo" className="w-7 h-19 object-cover" />
          <span className="text-xl font-bold">
            Servicio Médico Primario UNA PUNO
          </span>
        </div>
        <div className="flex items-center justify-end flex-1">
          <nav className="hidden md:flex space-x-4 mr-4">
            <Link
              to="/"
              className="text-yellow-200 "
              style={{ borderBottom: "0.5m solid #FBBF24" }}
            >
              Inicio
            </Link>
            <a
              href="https://www.serviciomedicounapuno.xyz/servicios"
              className="hover:text-yellow-200"
            >
              Servicios
            </a>
            <a
              href="https://www.serviciomedicounapuno.xyz/ubicacion-y-eventos/ubicacion-principal"
              className="hover:text-yellow-200"
            >
              Ubicacion y Eventos
            </a>
            <a
              href="https://www.serviciomedicounapuno.xyz/sobre-nosotros"
              className="hover:text-yellow-200"
            >
              Sobre Nostros
            </a>

            <Link to="/iniciar" className="hover:text-yellow-200">
              Iniciar Sesión
            </Link>
          </nav>
          <Button
            className="bg-yellow-600 hover:bg-yellow-700"
            size="small"
            variant="primary"
            aria-label="Search"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing, Principal } from "./pages";
import Login from "./pages/auth/login.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";
import fondoNav from "./assets/nav.jpg";
import doc from "./assets/doc.jpg";
import Dash from "./pages/admin/index.jsx";
import Pedidos from "./pages/admin/pedidos/index.jsx";
import Producto from "./pages/admin/productos/index.jsx";
import Categoria from "./pages/admin/categorias/index.jsx";
import Estadistica from "./pages/admin/estadistica/index.jsx";
import Historial from "./pages/admin/historial_clinico/index.jsx";
import Paciente from "./pages/admin/paciente/index.jsx";
import Cita from "./pages/admin/citas/index.jsx";
import MediosPago from "./pages/admin/pago/index.jsx";
function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PaginaPrincipal />} />

        <Route path="/iniciar" element={<Login />} />
        {/* Otras rutas de tu aplicación */}

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/admin" element={<Dash />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/productos" element={<Producto />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/estadistica" element={<Estadistica />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/pacientes" element={<Paciente />} />
          <Route path="/citas" element={<Cita />} />
          <Route path="/pagos" element={<MediosPago />} />
          {/*<Route path="/quejas" element={<QuejasySugerencias />} />  */}
        </Route>
      </Routes>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      {/* <Routes>
        <Route path="/" />
        <Route path="/landing" element={<Landing />} />
        <Route path="/iniciar" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes> */}
    </BrowserRouter>
  );
}

function PaginaPrincipal() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section
          className="flex items-center justify-center bg-center bg-cover h-96"
          style={{
            backgroundImage: `url(${fondoNav})`,
          }}
        >
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Bienvenido</h1>
            <p className="text-xl">
              Hola, Saluton, Hi, Imaynallan kachkanki?, How are you?,
            </p>
          </div>
        </section>
        <section className="container px-4 py-12 mx-auto md:px-0">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/2">
              <img
                alt="Doctor examining patient"
                className="object-cover w-full h-full rounded-lg"
                height="400"
                src={doc}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="space-y-4 md:w-1/2">
              <h2 className="text-2xl font-bold">Presentacion</h2>
              <div className="space-y-4">
                <Button
                  href="https://www.serviciomedicounapuno.xyz/servicios"
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  variant="secondary"
                >
                  Servicios
                </Button>
                <Button
                  href="https://www.serviciomedicounapuno.xyz/ubicacion-y-eventos/ubicacion-principal"
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  variant="secondary"
                >
                  Ubicación
                </Button>
                <Button
                  href="https://www.serviciomedicounapuno.xyz/ubicacion-y-eventos/eventos"
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  variant="secondary"
                >
                  Eventos
                </Button>
                <Button
                  href="https://www.serviciomedicounapuno.xyz/sobre-nosotros"
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  variant="secondary"
                >
                  Sobre nosotros
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/*
  <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
*/

export default App;

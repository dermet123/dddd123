// src/auth/login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lose from "../../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (activeTab === "login") {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include", // Para manejar cookies de sesión
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error al iniciar sesión");
        }

        // Guardar el token en localStorage o context
        localStorage.setItem("token", data.token);

        // Redireccionar al dashboard o página principal
        navigate("/dashboard");
      } else if (activeTab === "register") {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error al registrar");
        }

        // Cambiar a la pestaña de login después de un registro exitoso
        setActiveTab("login");
        setError("Registro exitoso. Por favor inicia sesión.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setError(""); // Limpiar errores al cambiar de pestaña
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col p-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          SERVICIO MEDICO PRIMARIO
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={lose}
            alt="Servicio Primario"
            className="w-12 h-19 object-cover"
          />
        </div>

        {/* Mensajes de error */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="flex justify-center space-x-12 mb-6">
          <button
            className={`text-blue-600 hover:border-b-2 border-blue-600 text-xl ${
              activeTab === "login"
                ? "font-bold border-b-2 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick("login")}
          >
            Iniciar sesión
          </button>
          <button
            className={`text-blue-600 hover:border-b-2 border-blue-600 text-xl ${
              activeTab === "register"
                ? "font-bold border-b-2 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick("register")}
          >
            Registrarme
          </button>
        </div>

        {activeTab === "login" && (
          <div className="bg-red-50 py-10 px-20 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-blue-700">Cuenta</span>
                <div className="relative w-full">
                  <input
                    id="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                    disabled={loading}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-blue-700">Contraseña</span>
                <div className="relative w-full">
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-black"
                    required
                    disabled={loading}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </div>
                <Link to="/restablecer" className="block mt-2">
                  <span className="text-blue-700 font-bold hover:text-blue-800">
                    ¿Olvidaste tu Contraseña?
                  </span>
                </Link>
              </div>
              <button
                type="submit"
                className={`w-40 h-18 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Cargando..." : "Iniciar sesión"}
              </button>
              <Link to="/admin">Dashboard</Link>
            </form>
          </div>
        )}

        {activeTab === "register" && (
          <div className="bg-red-50 py-10 px-20 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-blue-700">Nombre</span>
                <input
                  id="name"
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <span className="text-blue-700">Correo electrónico</span>
                <input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <span className="text-blue-700">Contraseña</span>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Registrando..." : "Registrarme"}
              </button>
            </form>
          </div>
        )}
      </div>
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/api/placeholder/800/600')",
        }}
      />
    </div>
  );
};

export default LoginPage;

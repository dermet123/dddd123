import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlusCircle,
  RefreshCw,
  Archive,
  Image,
  Activity,
  ShoppingCart,
  Package,
  Tags,
  BarChart2,
  FileText,
  Users,
  CalendarDays,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Activity className="w-5 h-5" />, to: "/admin" },
  {
    name: "Pedidos",
    icon: <ShoppingCart className="w-5 h-5" />,
    to: "/pedidos",
  },
  {
    name: "Productos",
    icon: <Package className="w-5 h-5" />,
    to: "/productos",
  },
  { name: "Categorías", icon: <Tags className="w-5 h-5" />, to: "/categoria" },
  {
    name: "Estadística",
    icon: <BarChart2 className="w-5 h-5" />,
    to: "/estadistica",
  },
  {
    name: "Historial Clínico",
    icon: <FileText className="w-5 h-5" />,
    to: "/historial",
  },
  { name: "Pacientes", icon: <Users className="w-5 h-5" />, to: "/pacientes" },
  { name: "Citas", icon: <CalendarDays className="w-5 h-5" />, to: "/citas" },
  {
    name: "Medios de Pago",
    icon: <CreditCard className="w-5 h-5" />,
    to: "/pagos",
  },
  {
    name: "Quejas y Sugerencias",
    icon: <MessageSquare className="w-5 h-5" />,
    to: "/quejas",
  },
];

const Producto = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Productos");

  return (
    <div className="flex h-screen bg-white-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-md ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <h1
          className={`font-bold text-xl text-blue-600 ${
            !sidebarOpen && "hidden"
          }`}
        >
          Servicio Médico Primario
        </h1>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-semibold">Menú</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500"
          >
            X
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className={`flex items-center space-x-2 p-2 rounded ${
                  activeItem === item.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-800"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 ml-64">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          <div className="border rounded-lg shadow-sm min-h-[300px] p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Nuevo Producto</h2>
              <PlusCircle className="w-5 h-5 text-gray-500" />
            </div>
            <div>{/* Contenido para nuevo producto */}</div>
          </div>

          <div className="border rounded-lg shadow-sm min-h-[300px] p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Actualizar Producto</h2>
              <RefreshCw className="w-5 h-5 text-gray-500" />
            </div>
            <div>{/* Contenido para actualizar producto */}</div>
          </div>

          <div className="border rounded-lg shadow-sm min-h-[300px] p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Productos Inactivos</h2>
              <Archive className="w-5 h-5 text-gray-500" />
            </div>
            <div>{/* Contenido para productos inactivos */}</div>
          </div>

          <div className="border rounded-lg shadow-sm min-h-[300px] p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Agregar Imagen</h2>
              <Image className="w-5 h-5 text-gray-500" />
            </div>
            <div>{/* Contenido para agregar imagen */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;

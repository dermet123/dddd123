import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ChevronRight,
  User,
  Info,
  Activity,
  Package,
  Tags,
  BarChart2,
  FileText,
  Users,
  CalendarDays,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const Checkbox = ({ className }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`h-4 w-4 rounded border border-gray-300 flex items-center justify-center cursor-pointer ${
        checked ? "bg-primary border-primary" : "bg-white"
      } ${className}`}
      onClick={() => setChecked(!checked)}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
};

const menuItems = [
  {
    name: "Dashboard",
    icon: <Activity className="w-5 h-5" />,
    to: "/admin",
  },
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
  { name: "Categorías", icon: <Tags className="w-5 h-5" />, to: "/categorias" },
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

const Pedidos = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Pedidos");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 h-full`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1
            className={`font-bold text-xl text-blue-600 ${
              !sidebarOpen && "hidden"
            }`}
          >
            Servicio Médico Primario
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <ChevronRight
              className={`w-5 h-5 transition-all ${
                !sidebarOpen && "rotate-180"
              }`}
            />
          </button>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                activeItem === item.name
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="grid gap-4 p-4">
          {/* Pending Orders */}
          <div className="bg-white border rounded-lg">
            <div className="px-4 py-3 font-medium border-b bg-gray-50">
              <span className="text-lg text-gray-900">PEDIDOS PENDIENTES</span>
            </div>
            <div className="divide-y">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`pending-${i}`}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50"
                >
                  <User className="w-5 h-5 text-gray-500 shrink-0" />
                  <span className="text-gray-700">Pedido #{i + 1}</span>
                  <Checkbox className="shrink-0" />
                  <Info className="w-5 h-5 ml-auto text-gray-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Cancelled Orders */}
          <div className="bg-white border border-red-200 rounded-lg">
            <div className="px-4 py-3 font-medium border-b border-red-200 bg-red-50">
              <span className="text-lg text-red-700">PEDIDOS CANCELADOS</span>
            </div>
            <div className="divide-y">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`cancelled-${i}`}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50"
                >
                  <User className="w-5 h-5 text-gray-500 shrink-0" />
                  <span className="text-gray-700">Pedido #{i + 1}</span>
                  <Checkbox className="shrink-0" />
                  <Info className="w-5 h-5 ml-auto text-gray-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Delivered Orders */}
          <div className="bg-white border border-green-200 rounded-lg">
            <div className="px-4 py-3 font-medium border-b border-green-200 bg-green-50">
              <span className="text-lg text-green-700">PEDIDOS ENTREGADOS</span>
            </div>
            <div className="divide-y">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`delivered-${i}`}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50"
                >
                  <User className="w-5 h-5 text-gray-500 shrink-0" />
                  <span className="text-gray-700">Pedido #{i + 1}</span>
                  <Checkbox className="shrink-0" />
                  <Info className="w-5 h-5 ml-auto text-gray-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pedidos;

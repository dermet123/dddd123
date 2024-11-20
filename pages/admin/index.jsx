import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  CalendarDays,
  CreditCard,
  Users,
  Package,
  ShoppingCart,
  Tags,
  FileText,
  MessageSquare,
  Activity,
  ChevronRight,
  ChartBar,
} from "lucide-react";
import {
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";

// Datos de ejemplo para los gráficos
const citasData = [
  { mes: "Ene", citas: 65 },
  { mes: "Feb", citas: 59 },
  { mes: "Mar", citas: 80 },
  { mes: "Abr", citas: 81 },
  { mes: "May", citas: 56 },
  { mes: "Jun", citas: 55 },
];

const ingresosData = [
  { mes: "Ene", ingresos: 4000 },
  { mes: "Feb", ingresos: 3000 },
  { mes: "Mar", ingresos: 5000 },
  { mes: "Abr", ingresos: 4800 },
  { mes: "May", ingresos: 6000 },
  { mes: "Jun", ingresos: 5500 },
];

const menuItems = [
  { name: "Dashboard", icon: <Activity className="w-5 h-5" /> },
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
  { name: "Categorías", icon: <Tags className="w-5 h-5" /> },
  { name: "Estadistica", icon: <ChartBar className="w-5 h-5" /> },
  { name: "Historial Clínico", icon: <FileText className="w-5 h-5" /> },
  { name: "Pacientes", icon: <Users className="w-5 h-5" /> },
  { name: "Citas", icon: <CalendarDays className="w-5 h-5" /> },
  { name: "Medios de Pago", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Quejas y Sugerencias", icon: <MessageSquare className="w-5 h-5" /> },
];

const DashboardCard = ({ title, value, description, icon: Icon }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="mt-1 text-2xl font-bold">{value}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>
);

const Dash = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-between h-20 px-4">
          <h1
            className={`font-bold text-xl text-blue-600 ${
              !sidebarOpen && "hidden"
            }`}
          >
            Servicio Medico Primario
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
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                activeItem === item.name
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
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

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </header>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Citas Totales"
              value="1,248"
              description="+8.1% desde el último mes"
              icon={CalendarDays}
            />
            <DashboardCard
              title="Nuevos Pacientes"
              value="384"
              description="+12.3% desde el último mes"
              icon={Users}
            />
            <DashboardCard
              title="Ingresos Totales"
              value="$52,420"
              description="+6.4% desde el último mes"
              icon={CreditCard}
            />
            <DashboardCard
              title="Productos Vendidos"
              value="864"
              description="+4.7% desde el último mes"
              icon={Package}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Citas por Mes</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={citasData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="citas" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Ingresos por Mes</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ingresosData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ingresos"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: "#3b82f6" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dash;

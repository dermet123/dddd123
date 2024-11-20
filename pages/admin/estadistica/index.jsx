import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const pageData = [
  { name: "Página 1", visits: 92200, percentage: 17.8 },
  { name: "Página 2", visits: 66551, percentage: 9.9 },
  { name: "Página 3", visits: 32210, percentage: 2.2 },
  { name: "Página 4", visits: 29595, percentage: 0.5 },
  { name: "Página 5", visits: 524, percentage: 4.6 },
];

const monthlyData = [
  { name: "Ene", 2019: 15000, 2020: 20000, 2021: 25000 },
  { name: "Feb", 2019: 18000, 2020: 22000, 2021: 28000 },
  { name: "Mar", 2019: 12000, 2020: 25000, 2021: 24000 },
  { name: "Abr", 2019: 14000, 2020: 28000, 2021: 26000 },
  { name: "May", 2019: 16000, 2020: 30000, 2021: 22000 },
];

const trendData = [
  { name: "Nov", value1: 5.2, value2: 3.8, value3: 5.6, value4: 5.8 },
  { name: "Dic", value1: 5.0, value2: 4.0, value3: 5.4, value4: 5.6 },
  { name: "Ene", value1: 5.3, value2: 4.2, value3: 5.8, value4: 5.4 },
  { name: "Feb", value1: 4.8, value2: 4.4, value3: 5.9, value4: 5.2 },
  { name: "Mar", value1: 5.1, value2: 4.5, value3: 6.0, value4: 5.0 },
];

const Estadistica = () => {
  return (
    <div className="grid gap-6 p-6">
      {/* Bar Chart */}
      <div className="h-[300px] bg-white p-4 rounded-lg shadow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#2dd4bf" />
            <Bar dataKey="percentage" fill="#a855f7" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Page Statistics */}
      <div className="grid gap-4 md:grid-cols-2">
        {pageData.map((page, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div>
              <div className="text-sm text-gray-500">{page.name}</div>
              <div className="text-xl font-bold">
                {page.visits.toLocaleString()}
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2 text-sm font-medium">{page.percentage}%</div>
              {page.percentage > 5 ? (
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Trend Lines */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-[200px] bg-white p-4 rounded-lg shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#2dd4bf" />
              <Line type="monotone" dataKey="value2" stroke="#a855f7" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[200px] bg-white p-4 rounded-lg shadow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value3" stroke="#2dd4bf" />
              <Line type="monotone" dataKey="value4" stroke="#a855f7" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Chart */}
      <div className="h-[300px] bg-white p-4 rounded-lg shadow">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="2019"
              stroke="#2dd4bf"
              fill="#2dd4bf"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="2020"
              stroke="#a855f7"
              fill="#a855f7"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="2021"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Estadistica;

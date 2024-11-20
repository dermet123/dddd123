import { Users, Calendar, Clock, Smartphone } from "lucide-react";

export default function Paciente() {
  return (
    <div className="max-w-4xl p-4 mx-auto">
      {/* Stats Header */}
      <div className="flex items-center justify-between pb-4 mb-8 border-b">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-600" />
          <div>
            <div className="text-sm text-gray-600">Total Pacientes</div>
            <div className="font-bold">1,234</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <div>
            <div className="text-sm text-gray-600">Citas Hoy</div>
            <div className="font-bold">28</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-600" />
          <div>
            <div className="text-sm text-gray-600">En Espera</div>
            <div className="font-bold">5</div>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-left text-gray-500">
              <th className="pb-3">PACIENTE</th>
              <th className="pb-3">ESTADO</th>
              <th className="pb-3">PROXIMA CITA</th>
              <th className="pb-3">MEDICO</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gray-400" />
                  <span>Juan Pérez</span>
                </div>
              </td>
              <td className="py-3">
                <span className="text-green-600">Activo</span>
              </td>
              <td className="py-3 text-blue-600">23 Oct, 2024</td>
              <td className="py-3 text-blue-600">Dra. María González</td>
            </tr>
            <tr>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gray-400" />
                  <span>Juan Pérez</span>
                </div>
              </td>
              <td className="py-3">
                <span className="text-green-600">Activo</span>
              </td>
              <td className="py-3 text-blue-600">23 Oct, 2024</td>
              <td className="py-3 text-blue-600">Dra. María González</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

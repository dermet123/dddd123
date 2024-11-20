import { Clock, MapPin } from "lucide-react";

export default function Cita() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-8 text-3xl font-light text-blue-800">
          Reserva de Citas
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <p className="text-gray-600">
              En minutos un ejecutivo se contactará contigo para confirmar tu
              cita.
            </p>

            <div className="space-y-4">
              <h2 className="font-medium text-gray-700">Horario</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <p>Lunes a viernes 6:00 a.m. - 21:00 p.m.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <p>Sábados 6:00 a.m. - 18:00 p.m.</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <p>Av. Floral</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded bg-[#1e2a3b] text-white placeholder-gray-400"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Apellido"
                className="w-full p-3 rounded bg-[#1e2a3b] text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="DNI"
                className="w-full p-3 rounded bg-[#1e2a3b] text-white placeholder-gray-400"
              />
            </div>

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded bg-[#1e2a3b] text-white placeholder-gray-400"
            />

            <input
              type="tel"
              placeholder="Celular"
              className="w-full p-3 rounded bg-[#1e2a3b] text-white placeholder-gray-400"
            />

            <select className="w-full p-3 rounded bg-[#1e2a3b] text-white">
              <option value="">Especialidad</option>
              <option value="general">Medicina General</option>
              <option value="pediatria">Pediatría</option>
              <option value="cardiologia">Cardiología</option>
            </select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" id="privacy" className="rounded" />
              <label htmlFor="privacy">Política de Privacidad</label>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-16 h-8 bg-[#1e2a3b] rounded flex items-center justify-center text-white">
                  12+8=
                </div>
                <input
                  type="text"
                  className="w-16 p-2 rounded bg-[#1e2a3b] text-white"
                  placeholder="?"
                />
              </div>

              <button className="px-6 py-2 bg-[#1e2a3b] text-white rounded hover:bg-[#2a3b4f] transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

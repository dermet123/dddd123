import {
  Plus,
  Trash2,
  Printer,
  HelpCircle,
  Mail,
  Phone,
  User,
  Calendar,
  MapPin,
  Activity,
  Heart,
  Syringe,
  FileText,
  AlertCircle,
  Clock,
  FileQuestion,
  FileClock,
  Ambulance,
} from "lucide-react";

export default function Historial() {
  return (
    <div className="max-w-full p-4 mx-auto bg-white">
      {/* Header Actions */}
      <div className="flex items-center gap-2 pb-2 mb-6 border-b">
        <div className="bg-[#4a5568] text-white px-3 py-1 rounded">
          GUARDADO
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Trash2 className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Printer className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Mail className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Phone className="w-5 h-5" />
        </button>
        <div className="ml-auto">
          <Ambulance className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Patient Information Form */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Gender */}
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Género</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                checked
                className="form-radio"
              />
              <span>Hombre</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="form-radio" />
              <span>Mujer</span>
            </label>
          </div>
        </div>

        {/* Names */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Primer Apellido*</label>
          <input
            type="text"
            value="Centeno"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Segundo Apellido</label>
          <input
            type="text"
            value="Flores"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Nombres*</label>
          <input
            type="text"
            value="Carlos Enrique"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Estado Civil*</label>
          <input
            type="text"
            value="Divorciado"
            className="w-full p-2 text-gray-500 border rounded"
          />
        </div>

        {/* Patient Status */}
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Estado de Paciente</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                checked
                className="text-black form-radio"
              />
              <span>Alta</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="status" className="form-radio" />
              <span>Baja</span>
            </label>
          </div>
        </div>

        {/* Additional Fields */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600">F. Nacimiento</label>
          <input
            type="text"
            value="25/12/2000"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Edad</label>
          <input
            type="number"
            value="23"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Gr. Sanguineo</label>
          <input type="text" value="0+" className="w-full p-2 border rounded" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">DNI</label>
          <input
            type="number"
            value="73872713"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Telefono</label>
          <input
            type="number"
            value="+51 32225 27"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Movil | Celular</label>
          <input
            type="number"
            value="951466800"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">No Historial Clinico</label>
          <input
            type="number"
            value="012024"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Correo Electronico</label>
          <input
            type="email"
            value="carlosenrique@gmail.com"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Aseguradora</label>
          <input
            type="text"
            value="EPS"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">No de Poliza</label>
          <input
            type="number"
            value="089466800"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">No de Tarjeta</label>
          <input
            type="number"
            value="1234567890123456"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Direccion</label>
          <input
            type="text"
            value="Camino de la Huerta No 273"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Ciudad</label>
          <input
            type="text"
            value="Juliaca"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Provincia</label>
          <input
            type="text"
            value="San Roman"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Region</label>
          <input
            type="text"
            value="Puno"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="space-y-2 text-black">
          <label className="text-sm text-gray-600">Pais</label>
          <input
            type="text"
            value="Peru"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Medical Record Tabs */}
      <div className="flex gap-2 text-sm text-black border-b">
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <FileText className="w-4 h-4" />
          <span>Observaciones</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <User className="w-4 h-4" />
          <span>Ant. Personales</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <Heart className="w-4 h-4" />
          <span>Ant. Familiares</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <AlertCircle className="w-4 h-4" />
          <span>Alergias</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <Syringe className="w-4 h-4" />
          <span>Vacunas</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <Activity className="w-4 h-4" />
          <span>Trat. actuales</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <FileQuestion className="w-4 h-4" />
          <span>Inf. Quirúrgicas</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50">
          <FileClock className="w-4 h-4" />
          <span>Enf. Crónicas</span>
        </button>
      </div>

      {/* Profile Picture */}
      <div className="mt-6">
        <div className="w-24 h-24 overflow-hidden border-2 rounded-full">
          <User className="w-full h-full p-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

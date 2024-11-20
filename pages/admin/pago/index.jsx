"use client";

import { ChevronDown, CreditCard, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <div className="p-4 rounded-t-lg bg-gradient-to-b from-blue-200 to-blue-100">
        <h1 className="text-3xl font-bold text-center text-white">Pagos</h1>
      </div>

      {currentStep === 1 ? (
        <div className="grid gap-8 p-6 bg-white md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-8 h-8 font-bold text-blue-800 bg-blue-200 rounded-full">
                1
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
              <div className="flex items-center justify-center w-8 h-8 font-bold text-gray-500 bg-gray-200 rounded-full">
                2
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-600">
                  Paso 1: Selecciona una especialidad
                </label>
                <div className="relative">
                  <select className="w-full p-3 pr-10 border rounded appearance-none bg-gray-50">
                    <option value="">Seleccionar especialidad</option>
                  </select>
                  <ChevronDown className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Paso 2: Selecciona tipo de trámite
                </label>
                <div className="relative">
                  <select className="w-full p-3 pr-10 border rounded appearance-none bg-gray-50">
                    <option value="">Seleccionar trámite</option>
                  </select>
                  <ChevronDown className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Paso 3: Selecciona el tipo de consulta
                </label>
                <div className="relative">
                  <select className="w-full p-3 pr-10 border rounded appearance-none bg-gray-50">
                    <option value="">Seleccionar consulta</option>
                  </select>
                  <ChevronDown className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 right-3 top-1/2" />
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-2 px-6 py-2 mt-6 text-blue-800 transition-colors bg-blue-100 rounded hover:bg-blue-200"
              >
                Siguiente
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Hospital building"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-8 h-8 font-bold text-blue-800 bg-blue-200 rounded-full">
                1
              </div>
              <div className="flex-1 h-0.5 bg-blue-200"></div>
              <div className="flex items-center justify-center w-8 h-8 font-bold text-blue-800 bg-blue-200 rounded-full">
                2
              </div>
            </div>

            <h2 className="mb-6 text-xl font-semibold">Finalizar Pago</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-600">
                  Seleccionar medio de pago
                </label>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="card" id="visa" />
                    <label htmlFor="visa">
                      <div className="flex items-center justify-center w-12 h-8 text-xs rounded bg-blue-50">
                        VISA
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="card" id="mastercard" />
                    <label htmlFor="mastercard">
                      <div className="flex items-center justify-center w-12 h-8 text-xs rounded bg-blue-50">
                        MC
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Nombre de la tarjeta *
                </label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full p-3 border rounded bg-gray-50"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Documento de identificación *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded bg-gray-50"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-600">
                  Número de la tarjeta *
                </label>
                <input
                  type="text"
                  placeholder="4040 1234 5678 9010"
                  className="w-full p-3 border rounded bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-600">
                    Código de seguridad *
                  </label>
                  <input
                    type="text"
                    placeholder="000"
                    className="w-full p-3 border rounded bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-600">
                    Fecha de vencimiento *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="p-3 border rounded bg-gray-50">
                      <option>Mes</option>
                    </select>
                    <select className="p-3 border rounded bg-gray-50">
                      <option>Año</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm">
                  Acepto los{" "}
                  <span className="text-green-600">términos y condiciones</span>{" "}
                  y{" "}
                  <span className="text-green-600">política de privacidad</span>
                </label>
              </div>

              <button className="w-full py-3 text-white transition-colors bg-green-500 rounded hover:bg-green-600">
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

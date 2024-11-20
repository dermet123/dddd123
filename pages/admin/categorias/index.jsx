import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Trash2 } from "lucide-react";

const Categoria = () => {
  return (
    <div className="flex flex-col max-w-3xl gap-4 p-4 mx-auto">
      {/* Nueva Categoría */}
      <div className="border-2 border-green-500 rounded-lg p-6 min-h-[200px]">
        <div className="flex items-center gap-2 mb-4 text-green-600">
          <PlusCircle className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Nueva Categoría</h2>
        </div>
      </div>

      {/* Eliminar Categoría */}
      <div className="border-2 border-red-500 rounded-lg p-6 min-h-[200px]">
        <div className="flex items-center gap-2 mb-4 text-red-600">
          <Trash2 className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Eliminar Categoría</h2>
        </div>
      </div>
    </div>
  );
};

export default Categoria;

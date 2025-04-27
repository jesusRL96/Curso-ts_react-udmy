import React from "react";
import { Category } from "../Types";
const categories: Category[] = [
  { id: 1, name: "Comida" },
  { id: 2, name: "Ejercicio" },
];

const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria:</label>
        <select
          name="category"
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bf-white"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="actividad">Actividad:</label>
        <input
          type="text"
          name="actividad"
          id="actividad"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Ejercicio"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Actividad:</label>
        <input
          type="text"
          name="calories"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300"
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
        value="Guardar comida o guardar aejercicio"
      />
    </form>
  );
};

export default Form;

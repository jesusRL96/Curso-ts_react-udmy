import React, { useState } from "react";
import { Activity, Category } from "../Types";
const categories: Category[] = [
  { id: 1, name: "Comida" },
  { id: 2, name: "Ejercicio" },
];

const Form = () => {
  const [activity, setActivity] = useState<Activity>({
    category: 0,
    name: "",
    calories: 0,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isNumber = ["category", "calories"].includes(event.target.name);
    setActivity({
      ...activity,
      [event.target.name]: isNumber ? +event.target.value : event.target.value,
    });
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria:</label>
        <select
          name="category"
          value={activity.category}
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bf-white"
          onChange={handleChange}
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
          name="name"
          value={activity.name}
          id="name"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Ejercicio"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Calorias:</label>
        <input
          type="text"
          name="calories"
          value={activity.calories}
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300"
          onChange={handleChange}
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

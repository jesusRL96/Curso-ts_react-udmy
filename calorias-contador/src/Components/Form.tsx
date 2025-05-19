import React, { useState, Dispatch } from "react";
import { Activity, Category } from "../Types";
import { ActivityActions } from "../reducers/activity-reducer";
const categories: Category[] = [
  { id: 1, name: "Comida" },
  { id: 2, name: "Ejercicio" },
];
import { v4 as uuidV4 } from "uuid";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

const activityInitialState: Activity = {
  id: uuidV4(),
  category: 1,
  name: "",
  calories: 0,
};

const Form = ({ dispatch }: FormProps) => {
  const [activity, setActivity] = useState<Activity>(activityInitialState);

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

  const isValidateForm = () => {
    return activity.name.trim() != "" && activity.calories > 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({ ...activityInitialState, id: uuidV4() });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={(e) => handleSubmit(e)}
    >
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
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:opacity-10"
        value={`Guardar ${activity.category == 1 ? "comida" : "ejercicio"}`}
        disabled={!isValidateForm()}
      />
    </form>
  );
};

export default Form;

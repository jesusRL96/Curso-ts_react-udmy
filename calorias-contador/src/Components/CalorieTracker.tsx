import { useMemo } from "react";
import { Activity } from "../Types";
import { CalorieDisplay } from "./CalorieDisplay";

export const CalorieTracker = ({ activities }: { activities: Activity[] }) => {
  const caloriesConsumed: number = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0,
      ),
    [activities],
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0,
      ),
    [activities],
  );
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gsp-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="Quemadas" />
        <CalorieDisplay calories={caloriesConsumed - caloriesBurned} text="Diferencia" />
      </div>
    </>
  );
};

import { useEffect, useMemo, useReducer } from "react";
import Form from "./Components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import { ActivityList } from "./Components/ActivityList";
import { CalorieTracker } from "./Components/CalorieTracker";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () =>
    useMemo(() => state.activities, [state.activities]);
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
          <button
            disabled={!canRestartApp}
            className="p-2 bg-gray-800 hover:bg-gray-900 text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            onClick={() => dispatch({ type: "clean-activities" })}
          >
            Reiniciar
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <div className="max-w-4xl mx-auto">
          <ActivityList activities={state.activities} dispatch={dispatch} />
        </div>
      </section>
    </>
  );
}

export default App;

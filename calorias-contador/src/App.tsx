import { useReducer } from "react";
import Form from "./Components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import { ActivityList } from "./Components/ActivityList";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <div className="max-w-4xl mx-auto">
          <ActivityList activities={state.activities} />
        </div>
      </section>
    </>
  );
}

export default App;

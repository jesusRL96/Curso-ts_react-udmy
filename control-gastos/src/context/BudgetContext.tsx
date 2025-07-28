import { createContext, useReducer, type Dispatch } from "react";
import {
  budgetReducer,
  initialState,
  type BudgetActions,
  type BudgetState,
} from "../reducers/budget-reducer";
import App from "../App";

type budgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

export const BudgetContext = createContext<budgetContextProps>(
  {} as budgetContextProps,
);

type budgetProviderProps = {
  children: React.ReactNode;
};

export const BudgetProvider = ({ children }: budgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export type BudgetActions = {
  type: "add-budget";
  payload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const initialState = {
  budget: 0,
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions,
) => {
  if (action.type === "add-budget") {
    const budget = action.payload.budget;
    return { ...state, budget: budget };
  }
  return state;
};

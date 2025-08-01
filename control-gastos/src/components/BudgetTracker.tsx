import { useBudget } from "../hooks/useBudget"

const BudgetTracker = () => {
	const { state } = useBudget()
	return (
		<>
			<h2>BudgetTracker</h2>
			<p>{state.budget}</p>
		</>

	)
}

export default BudgetTracker

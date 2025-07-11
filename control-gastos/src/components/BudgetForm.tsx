import { useRef, useState } from "react";

const BudgetForm = () => {
  const budgetRef = useRef<HTMLInputElement>(null);
  const [budget, setBudget] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (budgetRef.current && budgetRef.current.value) {
      setBudget(+budgetRef.current.value);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} action="" className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          ref={budgetRef}
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="bugget"
        />
      </div>
      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black"
      />
    </form>
  );
};

export default BudgetForm;

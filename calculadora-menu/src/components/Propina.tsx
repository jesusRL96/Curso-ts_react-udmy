import React from "react";

const tips = [
  {
    id: "tip10",
    label: "10%",
    value: "0.1",
  },
  {
    id: "tip20",
    label: "20%",
    value: "0.2",
  },
  {
    id: "tip30",
    label: "30%",
    value: "0.3",
  },
];

type PropinaProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

const Propina = ({ setTip, tip }: PropinaProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Propina:</h2>
      <form>
        {tips.map((tipOption) => {
          return (
            <div className="flex gap-2" key={tipOption.id}>
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
              <input
                name="tip"
                type="radio"
                id={tipOption.id}
                value={tipOption.value}
                onChange={(e) => setTip(parseFloat(e.target.value))}
                checked={parseFloat(tipOption.value) === tip}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Propina;

"use client";

import { useState} from "react";
import Dice from "../../components/Dice";



export default function DiceGame() {
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newValues);
      setIsRolling(false);
    }, 1000);
  };

  const resetDice = () => {
    setDiceValues([1, 1, 1]);
  };

  const diceColors = [
    "bg-red-500 text-white",
    "bg-blue-500 text-white",
    "bg-green-500 text-white",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-12">
      <h1 className="text-4xl font-bold text-gray-800">Dice Roller</h1>
      
      <div className="flex gap-8">
        {diceValues.map((value, index) => (
          <Dice
            key={index}
            value={value}
            isRolling={isRolling}
            color={diceColors[index]}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={rollDice}
          disabled={isRolling}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all"
        >
          Roll Dice
        </button>
        <button
          onClick={resetDice}
          disabled={isRolling}
          className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all"
        >
          Reset
        </button>
      </div>

      <div className="text-2xl font-bold text-gray-700">
        Total: {diceValues.reduce((a, b) => a + b, 0)}
      </div>
    </div>
  );
}
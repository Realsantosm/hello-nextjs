interface DiceProps {
  value: number;
  isRolling: boolean;
  color: string;
}

export default function Dice({ value, isRolling, color }: DiceProps) {
  return (
    <div
      className={`w-24 h-24 relative ${
        isRolling ? "animate-spin" : ""
      } transition-all duration-500`}
    >
      <div
        className={`w-full h-full ${color} rounded-xl flex items-center justify-center text-4xl font-bold shadow-lg`}
      >
        {value}
      </div>
    </div>
  );
}
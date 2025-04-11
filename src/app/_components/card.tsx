interface HabitCardProps {
  title: string;
  isComplete: boolean;
  streak?: number;
  isHabit?: boolean;
}

function Card({ title, isComplete, streak, isHabit }: HabitCardProps) {
  return (
    <div className="border border-solid rounded-md border-white">
      <h3 className="text-lg p-6 pb-2">{title}</h3>
      <p className="text-sm text-gray-500 p-6 pt-0 pb-2">
        {isHabit ? `Streak: ${streak} ${streak === 1 ? "day" : "days"}` : null}
      </p>
      <div className="p-6 pt-0">
        <button
          className="bg-white text-black text-center w-full rounded-md h-9 space-y-14"
          type="button"
          onClick={() => console.log("Hello!")}
        >
          {isComplete ? "Completed" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export { Card };

interface HabitCardProps {
  id: string;
  title: string;
  isComplete: boolean;
  streak?: number;
  isHabit?: boolean;
  updateStatus: (id: string) => void;
}

function Card({ id, title, isComplete, streak, updateStatus }: HabitCardProps) {
  const hasStreak = !!streak && streak !== 0;

  const generateStreakString = () =>
    `Streak: ${streak} ${streak === 1 ? "day" : "days"}`;

  return (
    <div className="border border-solid rounded-md border-white">
      <h3 className="text-lg p-6 pb-2">{title}</h3>
      <p className="text-sm text-gray-500 p-6 pt-0 pb-2">
        {hasStreak ? generateStreakString() : null}
      </p>
      <div className="p-6 pt-0">
        <button
          className={`${isComplete ? "bg-green-600" : "bg-white"} hover:cursor-pointer text-black text-center w-full rounded-md h-9 space-y-14`}
          type="button"
          onClick={() => updateStatus(id)}
        >
          {isComplete ? "Completed" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export { Card };

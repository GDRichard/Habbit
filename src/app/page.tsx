"use client";

// Mock data for habits
const mockHabits = {
  daily: [
    { id: 1, name: "Drink 8 glasses of water", streak: 5, completed: false },
    { id: 2, name: "Meditate for 10 minutes", streak: 12, completed: true },
    { id: 3, name: "Read for 30 minutes", streak: 3, completed: false },
    { id: 4, name: "Take vitamins", streak: 1, completed: true },
  ],
  weekly: [
    { id: 1, name: "Go to the gym 3 times", progress: 2, total: 3 },
    { id: 2, name: "Call parents", progress: 0, total: 1 },
    { id: 3, name: "Meal prep", progress: 1, total: 1 },
  ],
  todo: [
    { id: 1, name: "Schedule dentist appointment", completed: false },
    { id: 2, name: "Pay electricity bill", completed: true },
    { id: 3, name: "Fix bike tire", completed: false },
    { id: 4, name: "Buy birthday gift", completed: false },
  ],
};

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daily</h2>
        {mockHabits.daily.map((habit) => (
          <div
            className="border border-solid rounded-md border-white"
            key={habit.id}
          >
            <h3 className="text-lg p-6 pb-2">{habit.name}</h3>
            <p className="text-sm text-gray-500 p-6 pt-0 pb-2">
              Streak: {habit.streak} {habit.streak === 1 ? "day" : "days"}
            </p>
            <div className="p-6 pt-0">
              <button
                className="bg-white text-black text-center w-full rounded-md h-9 space-y-14"
                type="button"
                onClick={() => console.log("Hello!")}
              >
                {habit.completed ? "Completed" : "Mark Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Weekly</h2>
        {mockHabits.weekly.map((habit) => (
          <div
            className="border border-solid rounded-md border-white"
            key={habit.id}
          >
            <h3 className="text-lg p-6 pb-2">{habit.name}</h3>
            <div className="p-6 pt-0">
              <button
                className="bg-white text-black text-center w-full rounded-md h-9 space-y-14"
                type="button"
                onClick={() => console.log("Hello!")}
              >
                {habit.progress === habit.total ? "Completed" : "Progress"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Todo</h2>
        {mockHabits.todo.map((habit) => (
          <div
            className="border border-solid rounded-md border-white"
            key={habit.id}
          >
            <h3 className="text-lg p-6 pb-2">{habit.name}</h3>
            <div className="p-6 pt-0">
              <button
                className="bg-white text-black text-center w-full rounded-md h-9 space-y-14"
                type="button"
                onClick={() => console.log("Hello!")}
              >
                {habit.completed ? "Completed" : "Mark Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

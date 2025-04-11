"use client";

// Mock data for habits
import { Card } from "@/app/_components/card";

const mockData = {
  habits: [
    { id: "1", name: "Drink 8 glasses of water", streak: 5, completed: false },
    { id: "2", name: "Meditate for 10 minutes", streak: 12, completed: true },
    { id: "3", name: "Read for 30 minutes", streak: 3, completed: false },
    { id: "4", name: "Take vitamins", streak: 1, completed: true },
  ],
  todo: [
    { id: "1", name: "Schedule dentist appointment", completed: false },
    { id: "2", name: "Pay electricity bill", completed: true },
    { id: "3", name: "Fix bike tire", completed: false },
    { id: "4", name: "Buy birthday gift", completed: false },
  ],
};

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daily</h2>
        {mockData.habits.map((habit) => (
          <Card
            key={habit.id}
            title={habit.name}
            streak={habit.streak}
            isComplete={habit.completed}
            isHabit
          />
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Todo</h2>
        {mockData.todo.map((todo) => (
          <Card key={todo.id} title={todo.name} isComplete={todo.completed} />
        ))}
      </div>
    </div>
  );
}

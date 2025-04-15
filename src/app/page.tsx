"use client";

import { Card } from "@/app/_components/card";
import { useState } from "react";

// Mock data for habits
const mockData = {
  habits: [
    { id: "1", name: "Drink 8 glasses of water", streak: 5, completed: false },
    { id: "2", name: "Meditate for 10 minutes", streak: 12, completed: true },
    { id: "3", name: "Read for 30 minutes", streak: 3, completed: false },
    { id: "4", name: "Take vitamins", streak: 1, completed: true },
  ],
  todos: [
    { id: "1", name: "Schedule dentist appointment", completed: false },
    { id: "2", name: "Pay electricity bill", completed: true },
    { id: "3", name: "Fix bike tire", completed: false },
    { id: "4", name: "Buy birthday gift", completed: false },
  ],
};

export default function Home() {
  const [habits, setHabits] = useState(mockData.habits);
  const [todos, setTodos] = useState(mockData.todos);

  const updateHabitStatus = (id: string) => {
    const index = habits.findIndex((h) => h.id === id);
    const habit = habits[index];
    const updatedHabit = { ...habit, completed: !habit.completed };
    const updatedHabits = habits.toSpliced(index, 1, updatedHabit);
    setHabits(updatedHabits);
  };

  const updateTodoStatus = (id: string) => {
    const index = todos.findIndex((h) => h.id === id);
    const todo = todos[index];
    const updatedTodo = { ...todo, completed: !todo.completed };
    const updatedTodos = todos.toSpliced(index, 1, updatedTodo);
    setTodos(updatedTodos);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Habits</h2>
        {habits.map((habit) => (
          <Card
            key={habit.id}
            id={habit.id}
            title={habit.name}
            streak={habit.streak}
            isComplete={habit.completed}
            updateStatus={updateHabitStatus}
          />
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Todos</h2>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.name}
            isComplete={todo.completed}
            updateStatus={updateTodoStatus}
          />
        ))}
      </div>
    </div>
  );
}

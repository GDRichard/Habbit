"use client";

import { useState } from "react";

import { Column } from "@/components/home/column";
import { Habit, Todo } from "@/types/data";
import { isHabit } from "@/lib/type-utils";

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

  function updateItemStatus(item: Habit | Todo) {
    const dataSet = isHabit(item) ? habits : todos;

    const index = dataSet.findIndex((d) => d.id === item.id);
    const originalItem = dataSet[index];
    const updatedItem = { ...originalItem, completed: !originalItem.completed };
    const updatedDataSet = dataSet.toSpliced(index, 1, updatedItem);

    if (isHabit(item)) {
      setHabits(updatedDataSet as Habit[]);
    } else {
      setTodos(updatedDataSet);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <Column
        data={habits}
        updateItemStatus={updateItemStatus}
        title="Habits"
      />
      <Column data={todos} updateItemStatus={updateItemStatus} title="Todos" />
    </div>
  );
}

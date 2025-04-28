"use client";

import { useState } from "react";

import { Column } from "@/components/home/column";
import { Habit, Todo } from "@/types/data";
import { isHabit } from "@/lib/type-utils";

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
    const data = isHabit(item) ? habits : todos;
    const index = data.findIndex((d) => d.id === item.id);
    const originalItem = data[index];
    const updatedItem = { ...originalItem, completed: !originalItem.completed };
    const updatedData = data.toSpliced(index, 1, updatedItem);
    updateData(updatedData, isHabit(item));
  }

  function deleteItem(item: Habit | Todo) {
    const data = isHabit(item) ? habits : todos;
    const index = data.findIndex((d) => d.id === item.id);
    const updatedData = data.toSpliced(index, 1);
    updateData(updatedData, isHabit(item));
  }

  function updateData(updatedData: Habit[] | Todo[], isHabit: boolean) {
    if (isHabit) {
      setHabits(updatedData as Habit[]);
    } else {
      setTodos(updatedData);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <Column
        title="Habits"
        data={habits}
        updateItemStatus={updateItemStatus}
        deleteItem={deleteItem}
      />
      <Column
        title="Todos"
        data={todos}
        updateItemStatus={updateItemStatus}
        deleteItem={deleteItem}
      />
    </div>
  );
}

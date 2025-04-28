import { CirclePlus } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Habit, Todo } from "@/types/data";
import { isHabit } from "@/lib/type-utils";

interface ColumnProps {
  title: string;
  data: Habit[] | Todo[];
  updateItemStatus: (item: Habit | Todo) => void;
  addItem: (newItemName: string, columnTitle: string) => void;
  deleteItem: (item: Habit | Todo) => void;
}

export function Column({
  title,
  data,
  updateItemStatus,
  addItem,
  deleteItem,
}: ColumnProps) {
  function generateStreakString(item: Habit | Todo) {
    if (isHabit(item)) {
      return `Streak: ${item.streak} ${item.streak === 1 ? "day" : "days"}`;
    }
    return "";
  }

  function onAddItem(formData: FormData) {
    const newItemName = formData.get("newItemName");
    if (typeof newItemName === "string") {
      addItem(newItemName, title);
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <form className="flex space-x-2" action={onAddItem}>
        <Input
          placeholder={`Add a ${title === "Habits" ? "habit" : "todo"}`}
          name="newItemName"
        />
        <Button type="submit" variant="outline" size="icon">
          <CirclePlus />
        </Button>
      </form>
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                <Button
                  className="text-red-400"
                  variant="link"
                  onClick={() => deleteItem(item)}
                >
                  Delete
                </Button>
              </div>
            </CardTitle>
            <CardDescription>{generateStreakString(item)}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              className={`${item.completed ? "bg-green-600 hover:bg-green-600/90" : ""} w-full`}
              onClick={() => updateItemStatus(item)}
            >
              {item.completed ? "Completed" : "Mark Complete"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

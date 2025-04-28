import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Habit, Todo } from "@/types/data";
import { isHabit } from "@/lib/type-utils";

interface ColumnProps {
  data: Habit[] | Todo[];
  updateItemStatus: (item: Habit | Todo) => void;
  title: string;
}

export function Column({ data, updateItemStatus, title }: ColumnProps) {
  function generateStreakString(item: Habit | Todo) {
    if (isHabit(item)) {
      return `Streak: ${item.streak} ${item.streak === 1 ? "day" : "days"}`;
    }
    return "";
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{generateStreakString(item)}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              className={`${item.completed ? "bg-green-600" : ""} hover:cursor-pointer w-full`}
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

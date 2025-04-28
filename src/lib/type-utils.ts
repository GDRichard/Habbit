import { Habit, Todo } from "../types/data";

export function isHabit(item: Habit | Todo): item is Habit {
  return (item as Habit).streak !== undefined;
}

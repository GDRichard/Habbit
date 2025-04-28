export interface Habit {
  id: string;
  name: string;
  streak: number;
  completed: boolean;
}

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

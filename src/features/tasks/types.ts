export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type FilterType = "all" | "completed" | "active";

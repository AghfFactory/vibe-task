import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, FilterType } from "./types";

interface TasksState {
  tasks: Task[];
  filter: FilterType;
}

const initialState: TasksState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    reorderTasks(
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) {
      const { from, to } = action.payload;
      const [moved] = state.tasks.splice(from, 1);
      state.tasks.splice(to, 0, moved);
    },
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, setFilter, reorderTasks  } = taskSlice.actions;
export default taskSlice.reducer;

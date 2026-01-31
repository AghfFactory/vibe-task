import type { RootState } from "../../app/store";

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectFilteredTasks = (state: RootState) => {
  const { tasks, filter } = state.tasks;

  switch (filter) {
    case "completed":
      return tasks.filter(t => t.completed);
    case "active":
      return tasks.filter(t => !t.completed);
    default:
      return tasks;
  }
};

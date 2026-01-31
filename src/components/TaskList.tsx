import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredTasks } from "../features/tasks/selectors";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { reorderTasks } from "../features/tasks/taskSlice"; // new action

export default function TaskList() {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.index !== destination.index) {
      dispatch(reorderTasks({ from: source.index, to: destination.index }));
    }
  };

  if (tasks.length === 0) {
    return <Typography align="center">No tasks</Typography>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <Stack
            spacing={2}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskItem task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}

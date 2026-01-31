import { Card, CardContent, Checkbox, Typography, Stack } from "@mui/material";
import type { Task } from "../features/tasks/types";
import { useDispatch } from "react-redux";
import { toggleTask } from "../features/tasks/taskSlice";

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <Stack>
            <Typography
              variant="h6"
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

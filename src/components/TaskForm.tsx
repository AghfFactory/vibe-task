import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        id: uuid(),
        title,
        description,
        completed: false,
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
    <Stack spacing={2} mb={3}>
      <TextField
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={2}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Task
      </Button>
    </Stack>
  );
}

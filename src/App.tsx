import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        {/* Header */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}
        >
          Task Manager
        </Typography>

        {/* Task Form Section */}
        <Paper
          elevation={3}
          sx={{ p: 3, mb: 3, borderRadius: 3 }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Add a New Task
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <TaskForm />
        </Paper>

        {/* Filter Section */}
        <Paper
          elevation={2}
          sx={{ p: 2, mb: 3, borderRadius: 3, backgroundColor: "#fafafa" }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
            Filter Tasks
          </Typography>
          <FilterBar />
        </Paper>

        {/* Task List Section */}
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 3 }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Your Tasks
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <TaskList />
        </Paper>
      </Container>
    </Box>
  );
}

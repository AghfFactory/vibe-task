import { ButtonGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";
import { selectFilter } from "../features/tasks/selectors";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <ButtonGroup fullWidth sx={{ mb: 2 }}>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </Button>
      <Button
        variant={filter === "active" ? "contained" : "outlined"}
        onClick={() => dispatch(setFilter("active"))}
      >
        Active
      </Button>
      <Button
        variant={filter === "completed" ? "contained" : "outlined"}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}

import React from "react";
import { Button, Box } from "@mui/material";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import styles from "./TasksWidget.module.scss";

const FullTasksView = ({ tasks, showCompleted, onToggleShowCompleted }) => {
  return (
    <div className={styles.fullView}>
      <TaskInput onAdd={(text) => console.log("Add task:", text)} />
      <Box sx={{ my: 2 }}>
        <Button variant="outlined" onClick={onToggleShowCompleted}>
          {showCompleted ? "Сховати виконані" : "Показати виконані"}
        </Button>
      </Box>
      <div className={styles.tasksList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => console.log("Toggle task:", task.id)}
            onDelete={() => console.log("Delete task:", task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullTasksView;

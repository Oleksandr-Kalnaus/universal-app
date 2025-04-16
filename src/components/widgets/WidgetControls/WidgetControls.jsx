import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useWidgets } from "../../../hooks/useWidgets";
import styles from "./WidgetControls.module.scss";

const WidgetControls = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { availableWidgets, activeWidgets, addWidget } = useWidgets();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdd = (widgetId) => {
    addWidget(widgetId);
    handleClose();
  };

  return (
    <div className={styles.widgetControls}>
      <Button variant="contained" startIcon={<Add />} onClick={handleClick}>
        Додати віджет
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {availableWidgets
          .filter((widget) => !activeWidgets.includes(widget))
          .map((widget) => (
            <MenuItem key={widget} onClick={() => handleAdd(widget)}>
              {widget === "tasks" && "Завдання"}
              {widget === "calendar" && "Календар"}
              {widget === "contacts" && "Контакти"}
              {widget === "notes" && "Нотатки"}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default WidgetControls;

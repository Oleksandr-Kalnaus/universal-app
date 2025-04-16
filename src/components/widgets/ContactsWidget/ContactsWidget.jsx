import React from "react";
import { List, ListItem, ListItemText, Avatar } from "@mui/material";
import WidgetBase from "../WidgetBase/WidgetBase";
import styles from "./ContactsWidget.module.scss";

const ContactsWidget = ({ isWidget, widgetId, onRemove }) => {
  const contacts = [
    { id: 1, name: "Іван Петренко", email: "ivan@example.com" },
    { id: 2, name: "Марія Сидоренко", email: "maria@example.com" },
  ];

  return (
    <WidgetBase
      title="Контакти"
      widgetId={widgetId}
      onRemove={onRemove}
      isWidget={isWidget}
    >
      <List className={styles.contactsList}>
        {contacts.slice(0, isWidget ? 3 : contacts.length).map((contact) => (
          <ListItem key={contact.id} className={styles.contactItem}>
            <Avatar className={styles.avatar}>{contact.name.charAt(0)}</Avatar>
            <ListItemText primary={contact.name} secondary={contact.email} />
          </ListItem>
        ))}
      </List>
    </WidgetBase>
  );
};

export default ContactsWidget;

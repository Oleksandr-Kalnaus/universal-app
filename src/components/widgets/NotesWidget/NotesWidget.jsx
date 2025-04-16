import React, { useState } from 'react'
import { TextField, Button, List, ListItem, IconButton } from '@mui/material'
import { Add, Delete } from '@mui/icons-material'
import styles from './NotesWidget.module.scss'
import WidgetBase from '../WidgetBase/WidgetBase'

const NotesWidget = ({ isWidget, widgetId, onRemove }) => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Перша нотатка' },
    { id: 2, text: 'Друга нотатка' }
  ])
  const [newNote, setNewNote] = useState('')

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote }])
      setNewNote('')
    }
  }

  return (
    <WidgetBase
      title="Нотатки"
      widgetId={widgetId}
      onRemove={onRemove}
      isWidget={isWidget}
    >
      {!isWidget && (
        <div className={styles.noteInput}>
          <TextField
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Нова нотатка"
            fullWidth
            size="small"
          />
          <Button onClick={handleAddNote} startIcon={<Add />}>
            Додати
          </Button>
        </div>
      )}
      <List className={styles.notesList}>
        {notes.slice(0, isWidget ? 3 : notes.length).map(note => (
          <ListItem key={note.id} className={styles.noteItem}>
            <ListItemText primary={note.text} />
            {!isWidget && (
              <IconButton onClick={() => setNotes(notes.filter(n => n.id !== note.id)}>
                <Delete />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
    </WidgetBase>
  )
}

export default NotesWidget
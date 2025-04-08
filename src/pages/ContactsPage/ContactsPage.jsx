import React, { useState } from 'react'
import {
    Container,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Avatar,
    IconButton
} from '@mui/material'
import { Add, Search, Edit, Delete } from '@mui/icons-material'
import styles from './ContactsPage.module.scss'

const Contacts = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Іван Петренко', email: 'ivan@example.com', phone: '+380991234567' },
        { id: 2, name: 'Марія Сидоренко', email: 'maria@example.com', phone: '+380992345678' }
    ])

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    )

    return (
        <Container maxWidth="lg" className={styles.contactsPage}>
            <h1>Контакти</h1>
            <div className={styles.controls}>
                <TextField
                    placeholder="Пошук контактів"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: <Search color="action" />
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="contained" startIcon={<Add />}>
                    Додати контакт
                </Button>
            </div>
            <List className={styles.contactsList}>
                {filteredContacts.map((contact) => (
                    <ListItem key={contact.id} className={styles.contactItem}>
                        <Avatar className={styles.avatar}>
                            {contact.name.charAt(0)}
                        </Avatar>
                        <ListItemText
                            primary={contact.name}
                            secondary={`${contact.phone} • ${contact.email}`}
                        />
                        <IconButton edge="end">
                            <Edit />
                        </IconButton>
                        <IconButton edge="end">
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default Contacts
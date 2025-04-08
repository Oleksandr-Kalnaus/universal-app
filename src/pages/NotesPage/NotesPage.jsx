import React from 'react'
import { Container, Typography } from '@mui/material'
import NotesWidget from '../../components/widgets/NotesWidget/NotesWidget'
import styles from './NotesPage.module.scss'

const NotesPage = () => {
    return (
        <Container maxWidth="lg" className={styles.notesPage}>
            <Typography variant="h4" component="h1" gutterBottom>
                Нотатки
            </Typography>
            <NotesWidget isWidget={false} />
        </Container>
    )
}

export default NotesPage
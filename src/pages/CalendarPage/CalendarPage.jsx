import React from 'react'
import { Container, Typography } from '@mui/material'
import CalendarWidget from '../../components/widgets/CalendarWidget/CalendarWidget'
import styles from './CalendarPage.module.scss'

const CalendarPage = () => {
    return (
        <Container maxWidth="lg" className={styles.calendarPage}>
            <Typography variant="h4" component="h1" gutterBottom>
                Календар
            </Typography>
            <CalendarWidget isWidget={false} />
        </Container>
    )
}

export default CalendarPage
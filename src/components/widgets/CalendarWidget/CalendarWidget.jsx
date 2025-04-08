import React, { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { Button, IconButton, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import styles from './CalendarWidget.module.scss'

const CalendarWidget = ({ isWidget }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(currentMonth)
    const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    return (
        <div className={`${styles.calendarWidget} ${isWidget ? styles.widget : ''}`}>
            <div className={styles.header}>
                <IconButton onClick={prevMonth} size="small">
                    <ChevronLeft />
                </IconButton>
                <Typography variant="h6">
                    {format(currentMonth, 'MMMM yyyy')}
                </Typography>
                <IconButton onClick={nextMonth} size="small">
                    <ChevronRight />
                </IconButton>
            </div>
            <div className={styles.daysGrid}>
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
                    <div key={day} className={styles.dayHeader}>
                        {day}
                    </div>
                ))}
                {monthDays.map((day) => (
                    <div
                        key={day.toString()}
                        className={`${styles.day} ${
                            !isSameMonth(day, currentMonth) ? styles.otherMonth : ''
                        } ${isSameDay(day, selectedDate) ? styles.selected : ''}`}
                        onClick={() => setSelectedDate(day)}
                    >
                        {format(day, 'd')}
                    </div>
                ))}
            </div>
            {!isWidget && (
                <Button
                    variant="outlined"
                    fullWidth
                    href="/calendar"
                    className={styles.viewAll}
                >
                    Повний календар
                </Button>
            )}
        </div>
    )
}

export default CalendarWidget
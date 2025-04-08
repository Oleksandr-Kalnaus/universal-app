import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
            id: 1,
            text: 'Завершити проєкт',
            completed: false,
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            text: 'Зустріч з клієнтом',
            completed: true,
            createdAt: new Date().toISOString()
        }
    ],
    status: 'idle',
    error: null
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter(task => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.items.find(task => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        updateTask: (state, action) => {
            const index = state.items.findIndex(task => task.id === action.payload.id)
            if (index !== -1) {
                state.items[index] = action.payload
            }
        }
    }
})

export const { addTask, deleteTask, toggleTask, updateTask } = tasksSlice.actions

export default tasksSlice.reducer

export const selectAllTasks = (state) => state.tasks.items
export const selectActiveTasks = (state) =>
    state.tasks.items.filter(task => !task.completed)
export const selectCompletedTasks = (state) =>
    state.tasks.items.filter(task => task.completed)
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth.slice'
import tasksReducer from './slices/tasks.slice'
import contactsReducer from './slices/contacts.slice'
import notesReducer from './slices/notes.slice'
import widgetsReducer from './slices/widgets.slice'
import uiReducer from './slices/ui.slice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
        contacts: contactsReducer,
        notes: notesReducer,
        widgets: widgetsReducer,
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
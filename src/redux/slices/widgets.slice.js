import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    availableWidgets: ['tasks', 'calendar', 'contacts', 'notes'],
    activeWidgets: ['tasks', 'calendar'],
    widgetSettings: {
        tasks: { size: 'medium', position: 0 },
        calendar: { size: 'medium', position: 1 },
    },
}

const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            if (!state.activeWidgets.includes(action.payload)) {
                state.activeWidgets.push(action.payload)
                state.widgetSettings[action.payload] = {
                    size: 'medium',
                    position: state.activeWidgets.length
                }
            }
        },
        removeWidget: (state, action) => {
            state.activeWidgets = state.activeWidgets.filter(
                (widget) => widget !== action.payload
            )
            delete state.widgetSettings[action.payload]
        },
        updateWidgetSettings: (state, action) => {
            const { widgetId, settings } = action.payload
            if (state.activeWidgets.includes(widgetId)) {
                state.widgetSettings[widgetId] = {
                    ...state.widgetSettings[widgetId],
                    ...settings
                }
            }
        },
        reorderWidgets: (state, action) => {
            state.activeWidgets = action.payload
        },
        resetWidgets: () => initialState,
    },
})

export const {
    addWidget,
    removeWidget,
    updateWidgetSettings,
    reorderWidgets,
    resetWidgets
} = widgetsSlice.actions

export default widgetsSlice.reducer
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import WidgetBase from '../../components/widgets/WidgetBase/WidgetBase'
import TasksWidget from '../../components/widgets/TasksWidget/TasksWidget'
import CalendarWidget from '../../components/widgets/CalendarWidget/CalendarWidget'
import ContactsWidget from '../../components/widgets/ContactsWidget/ContactsWidget'
import NotesWidget from '../../components/widgets/NotesWidget/NotesWidget'

const widgetComponents = {
    tasks: TasksWidget,
    calendar: CalendarWidget,
    contacts: ContactsWidget,
    notes: NotesWidget,
}

const WidgetRenderer = React.memo(({ widgetId, index }) => {
    const WidgetComponent = widgetComponents[widgetId]

    return (
        <Draggable draggableId={widgetId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="widget-container"
                >
                    <WidgetBase
                        widgetId={widgetId}
                        dragHandleProps={provided.dragHandleProps}
                    >
                        <WidgetComponent isWidget />
                    </WidgetBase>
                </div>
            )}
        </Draggable>
    )
})

export default WidgetRenderer
import React from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import WidgetRenderer from '../../features/dashboard/WidgetRenderer';
import WidgetControls from '../../components/widgets/WidgetControls';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => {
    const { activeWidgets } = useSelector(state => state.widgets);

    const onDragEnd = (result) => {
        // Логіка переміщення віджетів
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>Робочий стіл</h1>
                <WidgetControls />
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="widgets" direction="horizontal">
                    {(provided) => (
                        <div
                            className={styles.widgetsGrid}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {activeWidgets.map((widgetId, index) => (
                                <WidgetRenderer
                                    key={widgetId}
                                    widgetId={widgetId}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DashboardPage;
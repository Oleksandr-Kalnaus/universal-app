import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../../../features/tasks/tasksSlice';
import WidgetBase from '../WidgetBase/WidgetBase';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import styles from './TasksWidget.module.scss';

const TasksWidget = ({ isWidget = true, widgetId, onRemove }) => {
    const tasks = useSelector(state => state.tasks.items);
    const dispatch = useDispatch();
    const [showCompleted, setShowCompleted] = useState(false);

    const visibleTasks = isWidget
        ? tasks.slice(0, 5)
        : showCompleted
            ? tasks
            : tasks.filter(task => !task.completed);

    return (
        <WidgetBase
            title="Завдання"
            widgetId={widgetId}
            onRemove={onRemove}
            isWidget={isWidget}
        >
            {isWidget ? (
                <>
                    <TaskInput onAdd={(text) => dispatch(addTask(text))} compact />
                    <div className={styles.tasksList}>
                        {visibleTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggle={() => dispatch(toggleTask(task.id))}
                                onDelete={() => dispatch(deleteTask(task.id))}
                                compact
                            />
                        ))}
                    </div>
                </>
            ) : (
                <FullTasksView
                    tasks={visibleTasks}
                    showCompleted={showCompleted}
                    onToggleShowCompleted={() => setShowCompleted(!showCompleted)}
                />
            )}
        </WidgetBase>
    );
};

export default TasksWidget;
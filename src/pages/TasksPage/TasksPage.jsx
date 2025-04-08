import React from 'react';
import TasksWidget from '../../components/widgets/TasksWidget/TasksWidget';
import styles from './TasksPage.module.scss';

const TasksPage = () => {
    return (
        <div className={styles.tasksPage}>
            <h1>Мої завдання</h1>
            <TasksWidget isWidget={false} />
        </div>
    );
};

export default TasksPage;
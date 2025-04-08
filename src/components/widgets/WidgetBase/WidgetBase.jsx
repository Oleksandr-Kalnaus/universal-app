import React from 'react';
import styles from './WidgetBase.module.scss';
import { IconButton } from '@mui/material';
import { Close, Settings } from '@mui/icons-material';

const WidgetBase = ({
                        children,
                        title,
                        widgetId,
                        onRemove,
                        onSettings,
                        dragHandleProps
                    }) => {
    return (
        <div className={styles.widgetBase}>
            <div className={styles.widgetHeader} {...dragHandleProps}>
                <h3>{title}</h3>
                <div className={styles.widgetActions}>
                    {onSettings && (
                        <IconButton size="small" onClick={onSettings}>
                            <Settings fontSize="small" />
                        </IconButton>
                    )}
                    {onRemove && (
                        <IconButton size="small" onClick={() => onRemove(widgetId)}>
                            <Close fontSize="small" />
                        </IconButton>
                    )}
                </div>
            </div>
            <div className={styles.widgetContent}>
                {children}
            </div>
        </div>
    );
};

export default WidgetBase;
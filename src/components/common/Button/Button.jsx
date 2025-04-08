import React from 'react';
import styles from './Button.module.scss';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    fullWidth = false,
                    disabled = false,
                    onClick,
                    type = 'button',
                    className = ''
                }) => {
    return (
        <button
            type={type}
            className={`${styles.button} 
                 ${styles[variant]} 
                 ${styles[size]} 
                 ${fullWidth ? styles.fullWidth : ''} 
                 ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);
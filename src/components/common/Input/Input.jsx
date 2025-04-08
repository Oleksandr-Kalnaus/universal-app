import React from 'react';
import styles from './Input.module.scss';

const Input = ({
                   type = 'text',
                   placeholder = '',
                   value,
                   onChange,
                   label = '',
                   error = '',
                   ...props
               }) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${styles.input} ${error ? styles.error : ''}`}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default React.memo(Input);
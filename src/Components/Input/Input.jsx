import React from 'react';
import styles from './Input.module.scss'

const Input = ({placeholder, value, type, onChange, onBlur}) => {
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default Input;
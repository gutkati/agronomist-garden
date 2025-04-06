import React from 'react';
import styles from "./Button.module.scss"

const Button = ({color, text, onClick}) => {

    return (
        <button
            type='submit'
            style={{background: color}}
            className={styles.button}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
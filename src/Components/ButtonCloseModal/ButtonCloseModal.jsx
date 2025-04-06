import React from 'react';
import styles from "./ButtonCloseModal.module.scss"

const ButtonCloseModal = ({onClick}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}>
        </button>
    );
};

export default ButtonCloseModal;
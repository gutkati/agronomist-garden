import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({checked, onChecked}) => {

    return (

        <label className={styles.checkbox__container}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChecked}
            />
            <span className={styles.check__mark}></span>
        </label>
    );
};

export default Checkbox;
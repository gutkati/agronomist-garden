import React from 'react';
import styles from './Filters.module.scss';

const Filters = ({setFilter, active}) => {

    return (
        <div className={styles.filters}>
            <div className={styles.title}>
                <p>Фильтровать по:</p>
            </div>

            <ul className={styles.list}>
                <li onClick={() => setFilter("absent")} className={active === 'absent' ? styles.select : ''}>Отсутствующим</li>
                <li onClick={() => setFilter("present")} className={active === 'present' ? styles.select : ''}>Присутствующим</li>
                <li onClick={() => setFilter("all")} className={active === 'all' ? styles.select : ''}>Без фильтра</li>
            </ul>
        </div>
    );
};

export default Filters;
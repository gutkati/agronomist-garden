import React, {useState} from 'react';
import Table from "../Table/Table";
import styles from './Main.module.scss'
import Filters from "../Filters/Filters";

const Main = ({users}) => {
    const [filter, setFilter] = useState('all')

    let filterUsers = () => {
        switch (filter) {
            case "present":
                return users.filter(user => user.presence === true)
            case "absent":
                return users.filter(user => user.presence === false)
            default:
                return users
        }
    }

    return (
        <div className={styles.main}>
            <Table users={filterUsers}/>
            <Filters
                setFilter={setFilter}
                active={filter}
            />
        </div>
    );
};

export default Main;
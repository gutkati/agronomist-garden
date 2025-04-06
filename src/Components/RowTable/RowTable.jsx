import React, {useState} from 'react';
import styles from './RowTable.module.scss'
import color from '../../styles/_variables.scss'
import {useUsers} from "../../Context/UserContext";

const RowTable = (props) => {
    const {users} = useUsers()
    let user = users.find(user => user.id === props.id)

    function openPopupModal() {
        props.handleEditUser(user)
        props.openPopup()
    }

    return (
            <tr className={styles.row} onClick={openPopupModal}>
                <td>{(props.rowIndex + 1)}</td>
                <td>{props.name}</td>
                <td>{props.company}</td>
                <td>{props.group}</td>
                <td>

                    {
                        props.presence ?
                            <div
                                style={{background: color.greenColorMark}}
                                className={styles.mark__circle}
                            >
                            </div>
                            :

                            <div
                                style={{background: color.orangeColorMark}}
                                className={styles.mark__circle}
                            >
                            </div>
                    }

                </td>
            </tr>
    )
        ;
};

export default RowTable;
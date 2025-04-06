import React, {useState} from 'react';
import styles from './Table.module.scss';
import headers from '../../Arrays/Arrays.js';
import RowTable from "../RowTable/RowTable";
import PopupEdit from "../PopupModal/PopupEdit";

const Table = ({users}) => {
    const arrHeaders = headers
    const filterUsers = users()
    const [popupEdit, setPopupEdit] = useState(false)
    const [editUser, setEditUser] = useState(null)

    function handleEditUser(user) {
        setEditUser(user)
    }

    function openPopupEdit() {
        setPopupEdit(true)
    }

    function closePopupModal() {
        setPopupEdit(false)
    }

    return (
        <>
            <table className={styles.table}>
                <thead>
                <tr>
                    {arrHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {filterUsers.map((row, rowIndex) => (
                    <RowTable
                        key={row.id}
                        id={row.id}
                        rowIndex={rowIndex}
                        name={row.name}
                        company={row.company}
                        group={row.group}
                        presence={row.presence}
                        openPopup={openPopupEdit}
                        handleEditUser={handleEditUser}
                    />
                ))}
                </tbody>
            </table>

            <PopupEdit
                openPopup={popupEdit}
                closePopup={closePopupModal}
                editUser={editUser}
            />
        </>
    )
        ;
};

export default Table;
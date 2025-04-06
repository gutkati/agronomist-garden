import React, {useEffect, useState} from 'react';
import styles from './PopupModal.module.scss'
import ButtonCloseModal from "../ButtonCloseModal/ButtonCloseModal";
import Input from "../Input/Input";
import Checkbox from "../checkbox/checkbox";
import Button from "../Button/Button";
import color from "../../styles/_variables.scss";
import {useUsers} from "../../Context/UserContext";

const PopupEdit = ({openPopup, closePopup, editUser}) => {

    const {users, setUsers} = useUsers()
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [group, setGroup] = useState("")
    const [presence, setPresence] = useState(false)
    const [errorName, setErrorName] = useState("")
    const [errorCompany, setErrorCompany] = useState("")

    useEffect(() => {
        if (editUser) {
            setName(editUser.name)
            setCompany(editUser.company)
            setGroup(editUser.group)
            setPresence(editUser.presence)
        }
    }, [editUser]);

    function  onNameEditChange (e)  {
        setName(e.target.value)
        validateName(e.target.value)
    }

    function handleBlurName () {
        validateName(name)
    }

    function onCompanyEditChange (e)  {
        setCompany(e.target.value)
        validateCompany(e.target.value)
    }

    function handleBlurCompany () {
        validateCompany(company)
    }

    function validateName(value) {
        if (value.length !== 0) {
            setErrorName('')
            return true
        } else {
            setErrorName('Заполните поле')
            return false
        }
    }

    function validateCompany(value) {
        if (value.length === 0) {
            setErrorCompany('Заполните поле')
            return false
        }
        setErrorCompany('')
        return true
    }

    function handleSelectChange(e) {
        setGroup(e.target.value)
    }

    function onCheckedChange() {
        setPresence(!presence)
    }

    function handleEditSubmit(e) {
        e.preventDefault()

        if (name && company) {
            const updateUser = users.map(user => {
                    if (user.id === editUser.id) {
                        return {...user, name, company, group, presence}
                    }
                    return user
                }
            )

            setUsers(updateUser)
            closePopup()
        } else {
            validateName(name)
            validateCompany(company)
        }
    }

    function closePopupModal() {
        closePopup()
    }

    return (
        openPopup ?

            <div className={styles.popup}>
                <div className={styles.modal}>
                    <div className={styles.btn__close}>
                        <ButtonCloseModal
                            onClick={closePopupModal}
                        />
                    </div>

                    <form className={styles.form}>
                        <div className={styles.container__input}>
                            <label>ФИО</label>
                            <div className={styles.input}>
                                <Input
                                    placeholder=""
                                    value={name}
                                    type="text"
                                    maxlength='100'
                                    onChange={onNameEditChange}
                                    onBlur={handleBlurName}
                                />
                                <label className={styles.label}>{errorName}</label>
                            </div>

                        </div>

                        <div className={styles.container__input}>
                            <label>Компания</label>
                            <div className={styles.input}>
                                <Input
                                    placeholder=""
                                    value={company}
                                    type="text"
                                    onChange={onCompanyEditChange}
                                    onBlur={handleBlurCompany}
                                />
                                <label className={styles.label}>{errorCompany}</label>
                            </div>
                        </div>

                        <div className={styles.container__input}>
                            <label>Группа</label>
                            <select value={group} onChange={handleSelectChange}>
                                <option value="">Выбрать</option>
                                <option value="Прохожий">Прохожий</option>
                                <option value="Клиент">Клиент</option>
                                <option value="Партнер">Партнер</option>
                            </select>

                        </div>
                        <div className={styles.container__input}>
                            <label>Присутствие</label>
                            <div className={styles.checkbox}>
                                <Checkbox
                                    checked={presence}
                                    onChecked={onCheckedChange}/>
                            </div>
                        </div>

                        <div className={styles.container__btn}>
                            <Button
                                color={color.greenColor}
                                text="Сохранить"
                                onClick={handleEditSubmit}
                            />

                            <Button
                                color={color.grayColor}
                                text="Закрыть"
                                onClick={closePopupModal}
                            />
                        </div>
                    </form>
                </div>
            </div>

            : ""
    );
};

export default PopupEdit;
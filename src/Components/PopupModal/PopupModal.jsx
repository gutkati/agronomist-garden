import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import Input from "../Input/Input";
import Checkbox from "../checkbox/checkbox";
import styles from "./PopupModal.module.scss";
import Button from "../Button/Button";
import color from "../../styles/_variables.scss";
import ButtonCloseModal from "../ButtonCloseModal/ButtonCloseModal";
import {useUsers} from "../../Context/UserContext";

const PopupModal = ({openPopup, closePopup}) => {
    const {users, setUsers} = useUsers()

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [group, setGroup] = useState("")
    const [presence, setPresence] = useState(false)
    const [errorName, setErrorName] = useState("")
    const [errorCompany, setErrorCompany] = useState("")

    const onNameChange = (e) => {
        setName(e.target.value)
        validateName(e.target.value)
    }

    const handleBlurName = () => {
        validateName(name)
    }

    const onCompanyChange = (e) => {
        setCompany(e.target.value)
        validateCompany(e.target.value)
    }

    const handleBlurCompany = () => {
        validateCompany(company)
    }

    function validateName(value) {
        if (value.length === 0) {
            setErrorName('Заполните поле')
            return false
        }
        setErrorName('')
        return true
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

    function handleSubmit(e) {
        e.preventDefault()

        if (name && company) {
            const newUser = {
                id: nanoid(6),
                name,
                company,
                group,
                presence
            }

            setUsers([...users, newUser])

            setName("")
            setCompany("")
            setGroup("")
            setPresence(false)

            closePopup()
        } else {
            validateName(name)
            validateCompany(company)
        }
    }

    function closePopupModal() {
        setName("")
        setCompany("")
        setGroup("")
        setPresence(false)
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
                                    onChange={onNameChange}
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
                                    onChange={onCompanyChange}
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
                                text="Добавить"
                                onClick={handleSubmit}
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

export default PopupModal;
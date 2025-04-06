import React, {useState} from 'react';
import styles from "./Header.module.scss"
import Input from "../Input/Input";
import Button from "../Button/Button";
import color from "../../styles/_variables.scss"
import PopupModal from "../PopupModal/PopupModal";

const Header = ({searchName, setSearchName, searchCompany, setSearchCompany}) => {
    const [popupModal, setPopupModal] = useState(false)

    function openPopupModal() {
        setPopupModal(true)
    }

    function closePopupModal() {
        setPopupModal(false)
    }

    function handleSearchNameChange(e) {
        setSearchName(e.target.value)
    }

    function handleSearchCompanyChange(e) {
        setSearchCompany(e.target.value)
    }

    return (
        <div className={styles.header}>
            <div className={`${styles.header__container} ${styles.header__container_right}`}>
                <div className={styles.logo}></div>
                <div className={styles.search}>
                    <div className={styles.input}>
                        <Input
                            placeholder="Поиск по имени"
                            value={searchName}
                            onChange={handleSearchNameChange}
                            type="text"
                        />

                        <Input
                            placeholder="Поиск по компании"
                            value={searchCompany}
                            onChange={handleSearchCompanyChange}
                            type="text"
                        />
                    </div>

                    <Button
                        color={color.greenColor}
                        text="Добавить"
                        onClick={openPopupModal}
                    />
                </div>
            </div>
            <div className={`${styles.header__container} ${styles.header__container_left}`}>
                <div className={styles.header__visit}>
                    <p>Посетители</p>
                    <p>
                        <span className={styles.num__green}>280</span> / <span className={styles.num__orange}>35</span>
                    </p>
                </div>
            </div>

            <PopupModal
                openPopup={popupModal}
                closePopup={closePopupModal}
            />
        </div>
    );
};

export default Header;
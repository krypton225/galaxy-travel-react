import styles from "./_Navbar.module.scss";

const Toggler = ({ openToggler, clickOpenTogglerHandler }) => {
    return (
        <button type="button" className={`${styles.toggler}`} title="Toggler Button" onClick={clickOpenTogglerHandler}>
            <span className={openToggler ? styles["change-1"] : ""}></span>
            <span className={openToggler ? styles["change-2"] : ""}></span>
            <span className={openToggler ? styles["change-3"] : ""}></span>
        </button>
    )
}

export default Toggler;
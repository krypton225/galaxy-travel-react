import styles from "./_Landing.module.scss";

const Buttons = () => {
    return (
        <div className={styles["hero-section-buttons"]}>
            <button type="button" title="Training">training</button>
            <button type="button" title="Launch" className={styles["btn-bg"]}>launch</button>
        </div>
    )
}

export default Buttons;
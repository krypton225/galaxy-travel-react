import styles from "./_TopComponent.module.scss";

const TopComponent = ({ title, description }) => {
    return (
        <div className={styles["top-content"]}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default TopComponent;
import { Link } from "react-router-dom";

import styles from "./_MainButton.module.scss";

const MainButton = ({ linkTo, text }) => {
    return (
        <Link to={linkTo} className={styles.btn}>{text}</Link>
    )
}

export default MainButton;
import { Link } from "react-router-dom";

import styles from "./_MainButton.module.scss";

const MainButton = ({ linkTo, text, submitBtn = false, submitValue = "" }) => {
    let elementRendered = null;

    if (submitBtn) {
        elementRendered = <input type="submit" value={submitValue} className={`${styles.btn} ${styles.submit}`} />
    } else {
        elementRendered = <Link to={linkTo} className={styles.btn}>{text}</Link>
    }

    return elementRendered;
}

export default MainButton;
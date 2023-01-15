import { Link } from "react-router-dom";

import styles from "../Navbar/_Navbar.module.scss";

const Logo = () => {
    return (
        <h1 className={styles.logo}>
            <Link to="/">galaxy travel</Link>
        </h1>
    )
}

export default Logo;
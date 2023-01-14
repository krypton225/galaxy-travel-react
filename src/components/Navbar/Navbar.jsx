import styles from "./_Navbar.module.scss";

import NavbarItems from "../../data/navbarItems";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>
                <a href="/">galaxy travel</a>
            </h1>

            <ul className={styles.list}>
                {
                    NavbarItems.map(({ id, linkText, routeLink }) => (
                        <li key={id}>
                            <a href={routeLink}>{linkText}</a>
                        </li>
                    ))
                }
            </ul>

            <button type="button" className={styles.toggler}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}

export default Navbar;
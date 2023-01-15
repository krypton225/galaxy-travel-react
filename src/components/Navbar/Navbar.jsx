import { useEffect, useState } from "react";

import styles from "./_Navbar.module.scss";

import NavbarItems from "../../data/navbarItems";

const Navbar = () => {
    const [openToggler, setOpenToggler] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const clickOpenTogglerHandler = () => {
        setOpenToggler(prev => !prev);
    }

    useEffect(() => {
        checkScrolling();
        console.log("Yes!");
    }, [isScrolled]);

    const checkScrolling = () => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 250) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles["scroll"] : ""}`}>
            <h1 className={styles.logo}>
                <a href="/">galaxy travel</a>
            </h1>

            <ul className={`${styles.list} ${openToggler ? styles.show : ""}`}>
                {
                    NavbarItems.map(({ id, linkText, routeLink }) => (
                        <li key={id}>
                            <a href={routeLink}>{linkText}</a>
                        </li>
                    ))
                }
            </ul>

            <button type="button" className={`${styles.toggler}`} title="Toggler Button" onClick={clickOpenTogglerHandler}>
                <span className={openToggler ? styles["change-1"] : ""}></span>
                <span className={openToggler ? styles["change-2"] : ""}></span>
                <span className={openToggler ? styles["change-3"] : ""}></span>
            </button>
        </nav>
    )
}

export default Navbar;
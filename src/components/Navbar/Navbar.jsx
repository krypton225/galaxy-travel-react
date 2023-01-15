import { useEffect, useState } from "react";

import styles from "./_Navbar.module.scss";

import { Toggler, ItemList } from "./index";

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
                        <ItemList key={id} linkText={linkText} routeLink={routeLink} />
                    ))
                }
            </ul>

            <Toggler openToggler={openToggler} clickOpenTogglerHandler={clickOpenTogglerHandler} />
        </nav>
    )
}

export default Navbar;
import { useEffect, useState } from "react";

import { Logo } from "../index";

import { Toggler, ItemList } from "./index";

import styles from "./_Navbar.module.scss";

import NavbarItems from "../../data/navbarItems";

const Navbar = () => {
    const [openToggler, setOpenToggler] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const clickOpenTogglerHandler = () => {
        setOpenToggler(prev => !prev);
    }

    useEffect(() => {
        function checkScrolling() {
            if (window.scrollY > 250) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", checkScrolling);

        return () => {
            window.removeEventListener("scroll", checkScrolling);
        }
    }, [isScrolled]);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles["scroll"] : ""}`}>
            <Logo />

            <ul className={`${styles.list} ${openToggler ? styles.show : ""}`}>
                {
                    NavbarItems.map(({ id, linkText, routeLink, pathLinkRoute }) => (
                        <ItemList key={id} linkText={linkText} pathLinkRoute={pathLinkRoute}
                            closeAfterClickItem={clickOpenTogglerHandler} />
                    ))
                }
            </ul>

            <Toggler openToggler={openToggler} clickOpenTogglerHandler={clickOpenTogglerHandler} />
        </nav>
    )
}

export default Navbar;
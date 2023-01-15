import { FooterAbout, FooterInfo } from "./index";

import styles from "./_Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterInfo />
                <FooterAbout />
            </div>
        </footer>
    )
}

export default Footer;
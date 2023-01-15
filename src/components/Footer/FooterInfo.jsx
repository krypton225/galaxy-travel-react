import { FaSearchLocation, FaMailBulk } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import styles from "./_Footer.module.scss";

const FooterInfo = () => {
    return (
        <div className={styles.first}>
            <a href="https://goo.gl/maps/g4xNmxedAozcSLUbA" rel="noreferrer noopener" className={styles["first-top"]} target="_blank">
                <FaSearchLocation size={19} />

                <div className={styles["first-top-address"]}>
                    <p>123 acme st.</p>
                    <p>houston, TX</p>
                </div>
            </a>

            <a href="tel:+1234-00-1234" rel="noreferrer noopener" className={styles["first-middle"]}>
                <BsFillTelephoneFill size={19} />

                <p className={styles["first-middle-telephone"]}>+1234-00-1234</p>
            </a>

            <a href="mailto:trips@galaxy.com" rel="noreferrer noopener" className={styles["first-bottom"]}>
                <FaMailBulk size={19} />

                <p className={styles["first-bottom-mail"]}>trips@galaxy.com</p>
            </a>
        </div>
    )
}

export default FooterInfo;
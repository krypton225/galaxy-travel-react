import styles from "./_Footer.module.scss";

import { FaFacebookF, FaTwitter, FaLinkedin, FaSearchLocation, FaMailBulk } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
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

                <div className={styles.second}>
                    <h4 className={styles["second-title"]}>about the company</h4>

                    <p className={styles["second-description"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias non dicta hic ad facilis, debitis laudantium nostrum!
                    </p>

                    <div className={styles["second-social"]}>
                        <a href="https://www.facebook.com">
                            <FaFacebookF size={21} />
                        </a>

                        <a href="https://www.twitter.com">
                            <FaTwitter size={21} />
                        </a>

                        <a href="https://www.linkedin.com">
                            <FaLinkedin size={21} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
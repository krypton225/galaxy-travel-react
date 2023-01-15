import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

import styles from "./_Footer.module.scss";

const FooterAbout = () => {
    return (
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
    )
}

export default FooterAbout;
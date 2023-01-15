import styles from "./_Footer.module.scss";

import FooterAboutData from "../../data/footer-about";

const FooterAbout = () => {
    return (
        <div className={styles.second}>
            <h3 className={styles["second-title"]}>about the company</h3>

            <p className={styles["second-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias non dicta hic ad facilis, debitis laudantium nostrum!
            </p>

            <div className={styles["second-social"]}>
                {
                    FooterAboutData.map(({ id, urlLink, linkTitle, iconName, hasTarget, rel }) => (
                        <a href={urlLink} key={id} title={linkTitle} target={hasTarget ? "_blank" : ""} rel={rel}>
                            {iconName}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterAbout;
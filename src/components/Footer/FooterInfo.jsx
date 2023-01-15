import styles from "./_Footer.module.scss";

import FooterInformation from "../../data/footer-info";

const FooterInfo = () => {
    return (
        <div className={styles.first}>
            {
                FooterInformation.map(({ id, linkURL, linkTitle, relation, className, target, iconName, moreInfo: { classNameInfo, textAppeared: { first, second } } }) => (
                    <a href={linkURL} rel={relation} className={styles[`${className}`]} target={`${target ? "_blank" : ""}`} title={linkTitle} key={id}>
                        {iconName}

                        <div className={styles[`${classNameInfo}`]}>
                            <p>{first}</p>
                            <p>{second}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default FooterInfo;
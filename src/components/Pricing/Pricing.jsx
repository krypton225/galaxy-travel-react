import { Link } from "react-router-dom";

import { TopComponent } from "../index";

import styles from "./_Pricing.module.scss";

import PricingData from "../../data/pricing";

const Pricing = () => {
    return (
        <section className={styles.pricing}>
            <TopComponent title="pricing" description="choose your trip!" />

            <div className={styles["container"]}>
                {
                    PricingData.map(({ id, typeOfPricing, bitCoinValue, features: { days, views, numberFeatures, isPrivate } }) => (
                        <div key={id} className={styles.card}>
                            <h3 className={styles.title}>- {typeOfPricing} -</h3>

                            <div className={styles.line}></div>

                            <p className={styles.coin}>{bitCoinValue} BTC</p>

                            <ul className={styles["features-list"]}>
                                <li className={styles["features-item"]}>{days === 0 ? `` : `${days} Days`}</li>
                                <li className={styles["features-item"]}>{views}</li>
                                <li className={styles["features-item"]}>{numberFeatures} Features</li>
                                <li className={styles["features-item"]}>{isPrivate ? "Private Quarters" : "Not private"}</li>
                            </ul>

                            <Link to='/contact' className={styles.btn}>Book</Link>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Pricing;
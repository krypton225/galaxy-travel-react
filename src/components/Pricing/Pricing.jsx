import { useEffect } from "react";

import { MainButton, TopComponent } from "../index";

import styles from "./_Pricing.module.scss";

import PricingData from "../../data/pricing";

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                            <MainButton linkTo={"/contact"} text={"book"} submitBtn={false} />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Pricing;
import { useEffect } from "react";

import { MainButton, TopComponent } from "../index";

import styles from "./_Training.module.scss";

import Image1 from "../../assets/images/moon.jpg";
import Image2 from "../../assets/images/pod.jpg";

const Training = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.training}>
            <TopComponent title="training" description="pre-flight & in-flight training." />

            <div className={styles.details}>
                <div className={styles.first}>
                    <h4 className={styles["first-title"]}>training</h4>

                    <p className={styles["first-description"]}>Thorough training is a necessity when traveling to space.
                        We offer all inclusive training for pre-flight and in-flight scenarios.</p>

                    <MainButton linkTo={"/contact"} text={"contact"} />
                </div>

                <div className={styles.second}>
                    <div className={styles["second-img1"]}>
                        <img src={Image1} alt="Moon" draggable="false" />
                    </div>

                    <div className={styles["second-img2"]}>
                        <img src={Image2} alt="Pod" draggable="false" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Training;
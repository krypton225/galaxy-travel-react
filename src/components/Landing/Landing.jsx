import styles from "./_Landing.module.scss";

import VideoLanding from "./VideoLanding";

const Landing = () => {
    return (
        <section className={styles.landing}>
            <VideoLanding />

            <div className={styles["hero-section"]}>
                <h2 className={styles["hero-section-title"]}>galaxy. travel.</h2>

                <p className={styles["hero-section-description"]}>world's first civilian space travel</p>

                <div className={styles["hero-section-buttons"]}>
                    <button type="button" title="Training">training</button>
                    <button type="button" title="Launch" className={styles["btn-bg"]}>launch</button>
                </div>
            </div>
        </section>
    )
}

export default Landing;
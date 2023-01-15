import { useEffect } from "react";

import styles from "./_Landing.module.scss";

import { VideoLanding, Buttons } from "./index";

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <header className={styles.landing}>
            <VideoLanding />

            <div className={styles["hero-section"]}>
                <h2 className={styles["hero-section-title"]}>galaxy. travel.</h2>

                <p className={styles["hero-section-description"]}>world's first civilian space travel</p>

                <Buttons />
            </div>
        </header>
    )
}

export default Landing;
import { useEffect } from "react";

import { MainButton } from "../index";

import TopComponent from "../general/TopComponent";

import styles from "./_Contact.module.scss";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <section className={styles.contact}>
            <TopComponent title="contact" description="contact GLX travel" />

            <form className={styles["custom-form"]} onSubmit={submitHandler}>
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" className={styles["custom-form-name"]} autoComplete="new-password" />

                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" className={styles["custom-form-email"]} autoComplete="new-password" />

                <label htmlFor="subject">subject</label>
                <input type="text" name="subject" id="subject" className={styles["custom-form-subject"]} autoComplete="new-password" />

                <label htmlFor="details">details</label>
                <textarea name="details" id="details" autoComplete="new-password"></textarea>

                <MainButton submitValue="submit" submitBtn={true} />
            </form>
        </section>
    )
}

export default Contact;
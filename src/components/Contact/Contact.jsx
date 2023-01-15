import { useEffect } from "react";

import { MainButton } from "../index";

import TopComponent from "../general/TopComponent";

import styles from "./_Contact.module.scss";

import { InputContact } from "./index";

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
                <InputContact labelText="your name" idInput="name" inputType="text" inputName="name" inputStyleClassName="custom-form-name" />

                <InputContact labelText="email" idInput="email" inputType="email" inputName="email" inputStyleClassName="custom-form-email" />

                <InputContact labelText="subject" idInput="subject" inputType="text" inputName="subject" inputStyleClassName="custom-form-subject" />

                <label htmlFor="details">details</label>
                <textarea name="details" id="details" autoComplete="new-password"></textarea>

                <MainButton submitValue="submit" submitBtn={true} />
            </form>
        </section>
    )
}

export default Contact;
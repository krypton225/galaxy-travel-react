import styles from "./_Contact.module.scss";

const InputContact = ({ labelText, idInput, inputType, inputName, inputStyleClassName }) => {
    return (
        <>
            <label htmlFor={idInput}>{labelText}</label>
            <input type={inputType} name={inputName} id={idInput} className={styles[`${inputStyleClassName}`]} autoComplete="new-password" />
        </>
    )
}

export default InputContact;
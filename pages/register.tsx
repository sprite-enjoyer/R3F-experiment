import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import styles from "../styles/Register.module.scss";

const Register = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const [clicked, setClicked] = useState(false);
    const [email, setEmail] = useState<string>("");

    const onClickHandler = async () => {

        const currentEmail = emailRef.current?.value;
        const password = pwdRef.current?.value;
        const date = dateRef.current?.value;
        const name = nameRef.current?.value;

        if (!password || !currentEmail || !date || !name) return;
        if (password === "") return;

        setClicked(true);
        setEmail(currentEmail);

        await fetch("api/registerHandler", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: currentEmail,
                password: password,
                dob: parseInt(date),
            })
        });

    };

    const onInputHandler = async () => {

        await fetch("api/codeValidator", {
            method: "POST",
            body: JSON.stringify({
                code: codeRef.current?.value,
                email: email
            })
        });
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value.length > 4) e.target.value = e.target.value.slice(0, 4);
        const regexNotSatisfied = e.target.value !== '' && !re.test(e.target.value);
        if (regexNotSatisfied) e.target.value = "";
    };

    return (
        <div className={styles["main"]} >
            <div className={styles["main__container"]} >
                <input
                    placeholder="name"
                    ref={nameRef}
                    className={`${styles["main__container__name"]} ${styles["main__container__input"]}`}
                    type="text"
                />
                <input
                    placeholder="email"
                    ref={emailRef}
                    className={`${styles["main__container__email"]} ${styles["main__container__input"]}`}
                    type="email"
                />
                <input
                    placeholder="password"
                    ref={pwdRef}
                    className={`${styles["main__container__password"]} ${styles["main__container__input"]}`}
                    type="password"
                />
                <input
                    placeholder="birth year"
                    ref={dateRef}
                    onChange={onChangeHandler}
                    className={`${styles["main__container__date"]} ${styles["main__container__input"]}`}
                    type="text"
                />
                {!clicked &&
                    <button
                        onClick={onClickHandler}
                        className={styles["main__container__btn"]} >
                        send code
                    </button>
                }
                {clicked &&
                    <div className={styles["conditional"]} >
                        <input
                            ref={codeRef}
                            className={`${styles["conditional__input"]} ${styles["main__container__input"]}`}
                            placeholder="insert the text we sent you."
                        />
                        <button
                            onClick={onInputHandler}
                            className={styles["conditional__btn"]} >
                            submit
                        </button>
                    </div>
                }
                <div className={styles["main__container__login"]} >
                    <span>Already a member? <Link href="/login" >Login</Link></span>
                </div>
            </div>
        </div>
    )
}




export default Register;
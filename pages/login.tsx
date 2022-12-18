import Link from "next/link";
import { useRef } from "react";
import styles from "../styles/Login.module.scss";
import { useRouter } from "next/router";
import React from "react";

const Login = () => {
    const router = useRouter();

    const onClickHandler = async () => {

        const response = await fetch("api/loginHandler", {
            method: "POST",
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: pwdRef.current?.value
            })
        }).then(async res => await res.json());

        if (response.body.correct) router.push("/ChillingRoom");

    };

    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    return (
        <div className={styles["main"]} >
            <div className={styles["main__container"]} >

                <input
                    ref={emailRef}
                    placeholder="email"
                    className={styles["main__container__email"]}
                    type="email"
                />
                <input
                    ref={pwdRef}
                    placeholder="password"
                    className={styles["main__container__password"]}
                    type="password"
                />
                <button
                    onClick={onClickHandler}
                    className={styles["main__container__btn"]} >
                    Login
                </button>
                <div className={styles["main__container__login"]} >
                    <span>Not a member? <Link href="/register" >Register</Link></span>
                </div>
            </div>
        </div>
    )
};




export default Login;
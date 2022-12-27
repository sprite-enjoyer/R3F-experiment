import { signIn } from "next-auth/react";
import styles from "../styles/GoogleButton.module.scss";

const GoogleButton = () => {

  return (
    <button
      onClick={() => signIn("google")}
      className={styles["btn"]}
    >
      <div className={styles["btn__contents"]} >
        <img
          className={styles["btn__contents__image"]}
          src="/assets/google_signIn.svg" alt="Google signin button"
        />
        <span className={styles["btn__contents__text"]}>
          Sign in with Google
        </span>
      </div>
    </button>
  )
};

export default GoogleButton;

import { signIn } from "next-auth/react";
import styles from "../styles/GoogleButton.module.scss";

export interface SignInButtonWithProviderProps {
  providerName: string,
  onClickHandler: (e?: MouseEvent) => void,
  imageSrc: string
}

const signInButtonWithProvider = () => {

  return (
    <button
      onClick={async () => await signIn("google")}
      className={styles["btn"]}
    >
      <div className={styles["btn__contents"]} >
        <img
          className={styles["btn__contents__image"]}
          src="/assets/google_signIn.svg" alt="Google signin button"
        />
      </div>
    </button>
  )
};

export default signInButtonWithProvider;
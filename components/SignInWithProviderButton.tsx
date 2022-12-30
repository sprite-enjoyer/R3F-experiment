
import { BuiltInProviderType } from "next-auth/providers";
import { MouseEventHandler } from "react";
import styles from "../styles/SignInWithProviderButton.module.scss";

export interface SignInWithProviderButtonProps {
  providerName: BuiltInProviderType,
  onClickHandler: MouseEventHandler<HTMLButtonElement>
}

const SignInWithProviderButton = ({ providerName, onClickHandler }: SignInWithProviderButtonProps) => {
  const defaultPath = "/oAuthProviderImages/";
  const fileExtensionString = ".png";

  return (
    <button className={styles["btn"]} onClick={onClickHandler}>
      <img
        className={styles["btn__image"]}
        src={`${defaultPath}${providerName}${fileExtensionString}`}
        alt={`${providerName} signin button`}
      />
    </button>
  );
};

export default SignInWithProviderButton;
import { signIn } from "next-auth/react";
import styles from "../styles/SpotifyButton.module.scss";

const SpotifyButton = () => {

  return (
    <button
      onClick={() => signIn("spotify")}
      className={styles["btn"]}
    >
      <div className={styles["btn__contents"]} >
        <img
          className={styles["btn__contents__image"]}
          src="/assets/spotify_signIn.png" alt="spotify signin button"
        />
        <span className={styles["btn__contents__text"]}>
          Sign in with Spotify
        </span>
      </div>
    </button>
  )
};

export default SpotifyButton;
import styles from "../styles/login.module.scss";
import { Button, Container } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import SignInWithProviderButton from "../components/SignInWithProviderButton";

const Login = () => {
  const router = useRouter();
  const { data } = useSession();

  if (data) {
    router.replace(`user/${data.user?.email}/profile`);

    return <div className={styles["loading"]} >
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div className={styles["root"]} >
      <Container className={styles["main"]} >
        <Container className={styles["main__container"]} >
          <span className={styles["main__container__txt"]} >Sign In with:</span>
          <div className={styles["main__container__button-group"]} >
            <SignInWithProviderButton providerName="google" onClickHandler={async () => await signIn("google")} />
            <SignInWithProviderButton providerName="facebook" onClickHandler={async () => await signIn("facebook")} />
            <SignInWithProviderButton providerName="spotify" onClickHandler={async () => await signIn("spotify")} />
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Login;
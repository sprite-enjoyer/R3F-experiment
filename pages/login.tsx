import styles from "../styles/login.module.scss";
import { Container } from "@nextui-org/react";
import GoogleButton from "../components/GoogleButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { data } = useSession();

  if (data) {
    router.replace(`user/${data.user?.email}/profile`);

    return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      position: "absolute",
      top: "0",
      left: "0",
    }} >
      <h1>Loading...</h1>
    </div>
  }

  else {
    return (
      <div className={styles["root"]} >
        <Container className={styles["main"]} >
          <Container className={styles["main__container"]} >
            <GoogleButton />
          </Container>
        </Container>
      </div>
    );
  }
}

export default Login;
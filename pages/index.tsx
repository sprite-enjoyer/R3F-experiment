import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const url = `user/${data.user?.email}/profile`;
      router.replace(url);
    }
  }, [data]);

  return (
    <div className={styles["main"]} >
      <Head>
        <title>Welcome - Chilling Room</title>
      </Head>
      Join us on discord: "https://discord.gg/xDUcMzXU2a"
      <br />
      index page
    </div>
  )
}

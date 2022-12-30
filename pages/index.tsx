import styles from '../styles/Home.module.scss';
import { Session } from 'next-auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

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
      index page
    </div>
  )
}

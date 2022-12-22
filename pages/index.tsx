import styles from '../styles/Home.module.scss'
import React from 'react';
import { extend } from '@react-three/fiber';
import ChillingRoom from '../threeComponents/ChillingRoom';

function Home() {

  return (
    <div className={styles["main"]}>
      <ChillingRoom />
    </div>
  )
};

export default Home;

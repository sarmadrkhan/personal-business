import React from 'react';
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        🚧⚠🚧
      </h1>
      <p className={styles.text}>Page under construction...</p>
      <span className={styles.logo}>🔨</span>
    </div>
  );
}

export default Home;

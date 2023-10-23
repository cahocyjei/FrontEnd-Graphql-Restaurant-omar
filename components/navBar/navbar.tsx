import React from "react";
import Link from "next/link";
import styles from '@/styles/nav.module.css';


const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.col_1}>
        <Link href={"/"}>
          <img className={styles.imag} src={`/images/avocados.jpg`} alt="Logo" /> 
        </Link>
      </div>
      <div>
        <div className={styles.col_2}>
          <h1 className={styles.title}>Avocados</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

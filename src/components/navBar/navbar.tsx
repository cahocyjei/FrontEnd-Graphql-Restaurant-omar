import React from "react";
import Link from "next/link";
import styles from "@styles/nav.module.css";
import { Menu, Image } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
      <Menu
      className={styles.nav}
      style={{ background: "olive", padding: "20px" }}>
      <Menu.Item as="a">
        <Image className={styles.img} src={`/public/images/avocados.jpg`} />
      </Menu.Item>
      <Menu.Item>
        <h1 className={styles.title}>Avocados</h1>
      </Menu.Item>
      
    </Menu>
    <div style={{marginLeft:'50px',fontSize:'30px'}}>
      <Link href={"/"}>
          <i className="home icon">Home</i>
        </Link>
    </div>
    </div>  
  );
};

export default NavBar;

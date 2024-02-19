import React from "react";
import Link from "next/link";
import styles from "@styles/nav.module.css";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <div style={{
      display: "block"
    }}>
      <Menu className={styles.nav} style={{ background: "red", padding: "20px" }}>
        <Menu.Item as="a">
          <Image className={styles.img} src="/images/pizz.jpg" alt="logo" />
        </Menu.Item>
        <div style={{
          fontSize:"30px",
          marginTop:"70px",
        }}>
          <Link href={"/"}>
            <i className="home icon" style={{color:"white"}}>Home</i>
          </Link>
        </div>
        <Menu.Item>
          <h1 className={styles.title} >JeyK</h1>
        </Menu.Item>
        <Menu.Item>

        </Menu.Item>
      </Menu>

      <div style={{ marginLeft: '50px', fontSize: '30px' }}>

      </div>
    </div>
  );
};

export default NavBar;

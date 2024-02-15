import React from "react";
import Link from "next/link";
import styles from "@styles/nav.module.css";
import { Menu, Image, Dropdown } from "semantic-ui-react";

const NavBar = () => {
  const options = [
    { key: 'profile', text: 'Perfil', value: 'profile' },
    { key: 'loadusers', text: 'Usuarios', value: 'loadusers' },
    { key: 'registro', text: 'Registro', value: 'registro' },
    { key: 'login', text: 'Log-Out', value: 'login' },
    { key: 'login', text: 'Log-In', value: 'login' },

  ];

  return (
    <div>
      <Menu className={styles.nav} style={{ background: "red", padding: "20px" }}>
        <Menu.Item as="a">
          <Image className={styles.img} src="/images/pizz.jpg" alt="logo" />
        </Menu.Item>
        <Menu.Item>
          <h1 className={styles.title} >Restaurant Pizzeria 'JeyK'</h1>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown
            item
            text="Opciones"
          >
            <Dropdown.Menu>
              {options.map(option => (
                <Dropdown.Item 
                key={option.key}
                text={option.text}
                value={option.value}
                //onClick={(event: React.MouseEvent) => handleOptionClick(event, option.value)}
                 />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      <div style={{ marginLeft: '50px', fontSize: '30px' }}>
        <Link href={"/"}>
          <i className="home icon">Home</i>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

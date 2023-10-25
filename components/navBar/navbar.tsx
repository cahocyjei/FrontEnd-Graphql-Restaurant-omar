import React from "react";
import Link from "next/link";
import styles from '@/styles/nav.module.css';
import { Menu,Image} from 'semantic-ui-react';


const NavBar = () => {
  return (
    <Menu className={styles.nav} style={{ background: 'olive', padding: '20px' }}>
        <Link href={"/"}>
          <Menu.Item as='a'>
          <Image src={`/images/avocados.jpg`} style={{width:150,height:150,borderRadius:'100%'}} /> 
          </Menu.Item>
        </Link>
        <Menu.Item>
          <h1 className={styles.title}>Avocados</h1>
        </Menu.Item>
    </Menu>
  );
};

export default NavBar;

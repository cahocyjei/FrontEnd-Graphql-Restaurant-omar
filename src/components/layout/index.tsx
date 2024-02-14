import React, { ReactNode } from 'react'
import NavBar from '../navBar/navbar';
import Footer from '../footer';

type LayoutProps = {
  children: ReactNode | ReactNode[];
};
const Layout: React.FC<LayoutProps>= ( { children } ) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

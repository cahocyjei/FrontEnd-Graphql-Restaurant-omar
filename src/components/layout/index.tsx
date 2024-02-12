import React, { ReactNode } from 'react'
import NavBar from '@components/navBar/navbar';
import Footer from '@components/footer';

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

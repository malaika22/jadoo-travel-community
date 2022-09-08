import React from "react";

import Footer from "./Footer";
import Header from "./Header/Header";

import LayoutDecore from "../Layout/../../assets/layout-decore.png";

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <img
        src={LayoutDecore}
        alt='Decore'
        className='-z-10 absolute right-0 top-0'
      />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

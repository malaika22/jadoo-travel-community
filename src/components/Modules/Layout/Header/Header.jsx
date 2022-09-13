import React from "react";
import Logo from "../../../Elements/Logo/Logo";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import Snackbar from "./Snackbar";
const Header = () => {
  const links = [
    {
      href: "#",
      title: "Desitnations",
    },
    {
      href: "#",
      title: "Hotels",
    },
    {
      href: "#",
      title: "Flights",
    },
    {
      href: "#",
      title: "Bookings",
    },
  ];
  return (
    <header className='flex justify-between px-20  items-center pt-10'>
      <Logo />
      <div className='hidden md:flex justify-between items-center w-[800px]'>
        <div className='grid grid-cols-4 gap-x-4 '>
          {links.map(({ href, title }) => (
            <NavItems href={href} title={title} key={title} />
          ))}
        </div>
        <div className='flex items-center gap-x-5 '>
          <AuthButton>Login</AuthButton>
          <AuthButton>Sign up</AuthButton>
        </div>
      </div>
      <Snackbar />
    </header>
  );
};

export default Header;

const AuthButton = ({ children }) => {
  return (
    <motion.button className='text-secondaryLight font-semibold border-2 border-secondaryLight px-9 py-2 rounded-md'>
      {children}
    </motion.button>
  );
};

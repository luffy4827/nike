import React from "react";
import logo from "../assets/images/header-logo.svg";
import Menu from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} alt="" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
          navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}> {item.label}</a>
            </li>
          ))
          }
        </ul>

        <div className="md:hidden block">
          <img src={Menu} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

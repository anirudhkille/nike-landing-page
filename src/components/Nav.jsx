import { useState } from "react";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";

import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div
          className="hidden max-lg:block"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-0 bg-coral-red z-100 lg:hidden fade-in">
            <ul className=" flex justify-center items-center flex-col gap-5 px-10 py-10 ">
              {navLinks.map((item) => (
                <li key={item.label} onClick={() => setIsMenuOpen(false)}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-white font-bold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="text-white font-montserrat leading-normal text-lg font-bold">
                Sign In
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <img
                  src={close}
                  height={25}
                  width={25}
                  className="font-bold text-white"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { FaHamburger } from "react-icons/fa";
import HeroSection from "../hero/HeroMain";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-stone-800 text-white z-50 border-b-2 border-orange-400 shadow-md">
        <div className="flex justify-between items-center w-full">
          <NavbarLogo />

          {/* Desktop-navigaatio */}
          <div className="hidden lg:flex items-center gap-6">
            <NavbarLinks />
            <NavbarBtn />
          </div>

          {/* Hampurilaismenu-painike (mobiili) */}
          <button
            className="lg:hidden text-2xl p-3 rounded-full bg-orange-400 text-white"
            onClick={toggleMenu}
          >
            <FaHamburger />
          </button>
        </div>

        {/* Hampurilaismenu sisältö (mobiili) */}
        <div
          className={`lg:hidden flex flex-col items-center w-full bg-stone-800 text-white mt-2 p- rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        >
          {menuOpen && (
            <>
              <NavbarLinks />
              <NavbarBtn />
            </>
          )}
        </div>
      </nav>

      {/* HeroSection */}
      <HeroSection menuOpen={menuOpen} />
    </div>
  );
};

export default NavbarMain;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="text-white flex justify-between items-center py-10 px-8 md:px-18">
      <Link to="/" className="text-xl font-bold">
        <h1 className="text-3xl">AIgnite</h1>
      </Link>

      {/* menu icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none transition-colors duration-300 hover:text-gray-400">
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" /> // close icon
          ) : (
            <Bars3BottomRightIcon className="w-6 h-6" /> // hamburger icon
          )}
        </button>
      </div>

      {/* navigation links */}
      <div className={`${
              isOpen ? "block" : "hidden"
                  } md:flex md:items-center md:space-x-15 text-xl transition-all duration-300 ease-in-out`}>
        <Link to="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-400" onClick={closeMenu}>
          About
        </Link>
        <Link to="/booking" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-400" onClick={closeMenu}>
          Booking
        </Link>
        <Link to="/contact" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-400" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/login" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-400" onClick={closeMenu}>
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

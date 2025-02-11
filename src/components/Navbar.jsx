import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-10 px-8 md:px-18">
        <Link to="/" className="text-xl font-bold">
          <h1 className="text-3xl">AIgnite</h1>
        </Link>
        <div className="space-x-15">
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/signup" className="hover:text-gray-400">Sign up</Link>
          <Link to="/signin" className="hover:text-gray-400">Sign in</Link>
        </div>
      </nav>
      
    );
  }

export default Navbar;

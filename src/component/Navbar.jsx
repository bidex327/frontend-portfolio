import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#36535E] text-[#68727A]">
      <nav className="flex h-16 w-full items-center justify-between px-6">

        
        <div className="flex items-center gap-2">
          <img src={logo} alt="ABIDEX logo" className="h-20 w-auto" />
          <span className="text-lg font-semibold text-white">
            ABIDEX WEBDEV
          </span>
        </div>

      
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink to="/" end className={({ isActive }) =>
              isActive ? "text-white underline" : "text-gray-200 hover:text-white"
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-white underline" : "text-gray-200 hover:text-white"
            }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={({ isActive }) =>
              isActive ? "text-white underline" : "text-gray-200 hover:text-white"
            }>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "text-white underline" : "text-gray-200 hover:text-white"
            }>
              Contact
            </NavLink>
          </li>
        </ul>

        
        <div className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/login"
            className="rounded-md bg-white px-4 py-2 text-[#68727A]"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="rounded-md bg-white px-4 py-2 text-[#68727A]"
          >
            Sign Up
          </NavLink>
        </div>

        
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      
      {menuOpen && (
        <div className="md:hidden bg-[#36535E] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={() => setMenuOpen(false)}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-white px-4 py-2 text-[#68727A] text-center"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-white px-4 py-2 text-[#68727A] text-center"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="p-4 bg-indigo-950 text-white flex justify-between items-center ">
        <NavLink to="/">
          <h1 className="ml-5 font-semibold rounded-full border border-gray-300 p-1 shadow-2xl cursor-pointer">
            AL
          </h1>
        </NavLink>
        <ul className="hidden md:flex justify-around items-center gap-9 mr-5 cursor-pointer">
          <NavLink to="/">
            <li className="font-bold hover:text-blue-100">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="font-bold hover:text-blue-100">About us</li>
          </NavLink>
          <NavLink to="/ourteam">
            <li className="font-bold hover:text-blue-100">Our Team</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="font-bold hover:text-blue-100">Contact us</li>
          </NavLink>
          <NavLink to="/weather">
            <li className="font-bold hover:text-blue-100">Weather</li>
          </NavLink>
        </ul>

        <div
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="cursor-pointer md:hidden "
        >
          <GiHamburgerMenu />
        </div>
      </nav>
      {menuOpen && (
        <ul className="block shadow-sm w-full h-auto text-center font-bold cursor-pointer md:hidden ">
          <NavLink to="/about">
            <li className="p-3 hover:bg-gray-100 rounded-3xl mt-2">About us</li>
          </NavLink>
          <NavLink to="/ourteam">
            <li className="p-3 hover:bg-gray-100 rounded-3xl mt-2">Our Team</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="p-3 hover:bg-gray-100 rounded-3xl mt-2">
              Contact us
            </li>
          </NavLink>
          <NavLink to="/weather">
            <li className="p-3 hover:bg-gray-100 rounded-3xl mt-2">Weather</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

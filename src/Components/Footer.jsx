import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" p-4 bg-gray-200 rounded-t-3xl">
      <div className="md:flex justify-around items-center">
        <div className="mt-5">
          <h1 className="text-indigo-950 font-bold text-3xl text-center">
            Aakash Labs
          </h1>
          <p className="text-gray-500 p-2 text-base leading-relaxed md:w-100 text-center">
            AakashLabs implements advanced digital technologies in areas that
            are crucial to meeting your business objectives. Connect with us for
            details.
          </p>
          <p className="text-center text-gray-500">info@aakashlabs.com</p>
          <p className="text-center text-gray-500">
            Call us: <span>01-4530196</span>
          </p>
        </div>

        <div className="p-3 mt-5">
          <h1 className="text-center text-indigo-950 font-bold text-2xl">
            Quicks Links
          </h1>
          <NavLink to="/about">
            <p className="font-bold text-gray-500 p-3 text-center">About us</p>
          </NavLink>
          <NavLink to="/ourteam">
            {" "}
            <p className="font-bold text-gray-500 p-3 text-center">Our Team</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="font-bold text-gray-500 p-3 text-center">Contact</p>
          </NavLink>
        </div>

        <div className="p-3 mt-5">
          <h1 className="text-center text-indigo-950 font-bold text-2xl">
            Get connected
          </h1>
          <div className="ml-5 grid grid-cols-2 justify-center items-center">
            <a
              href="https://www.facebook.com/AakashLabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div className="p-4 hover:text-blue-800 cursor-pointer">
                <FaFacebook size={24} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/aakash.labs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className="p-4 hover:text-pink-600 cursor-pointer">
                <FaInstagramSquare size={24} />
              </div>
            </a>
            <a
              href="https://np.linkedin.com/company/aakashlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div className="p-4 hover:text-blue-800 cursor-pointer">
                <FaLinkedin size={24} />
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=9779801903810&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <div className="p-4 hover:text-green-500 cursor-pointer">
                <FaWhatsapp size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

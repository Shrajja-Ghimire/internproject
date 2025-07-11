import React from "react";
import { NavLink } from "react-router";

const Slider = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-10 bg-indigo-800 gap-10">
      <div className="text-white max-w-xl flex-1 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-extrabold text-center lg:text-left">
          Grow <span className="text-orange-400">Your</span> Business with us
        </h1>
        <p className="text-sm leading-relaxed text-center lg:text-left">
          Aakash Labs combines technology with business intelligence to catalyze
          change and deliver data-driven results. We're a dynamic team of
          passionate people with technical, creative & digital expertise.
        </p>
        <p className="text-sm text-center lg:text-left italic">
          Where technology meets marketing
        </p>
        <div className="flex justify-center lg:justify-start">
          <NavLink to="/about">
            <button className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 font-semibold transition duration-300 shadow-md">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center w-full max-w-lg">
        <div className="carousel rounded-lg shadow-lg overflow-hidden w-full h-[450px]">
          <div
            id="slide1"
            className="carousel-item relative w-full h-full grid grid-cols-1"
          >
            <p className=" p-6 text-white text-center font-extrabold flex flex-col justify-center items-center">
              Our experienced team is committed to grow your business with
              online leads, calls, conversion and revenue.
            </p>
            <div>
              <p className="text-gray-400 font-bold text-center hover:text-white">
                WHO WE ARE,WHAT WE DO,WHY DO WE DO IT
              </p>
            </div>
            <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a
                href="#slide4"
                className="btn btn-circle bg-blue-600 border border-blue-600"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-blue-600 border-blue-600"
              >
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide2"
            className="carousel-item relative w-full h-full grid grid-cols-1"
          >
            <p className=" p-6 text-white text-center font-extrabold flex flex-col justify-center items-center">
              Our Expertise
            </p>
            <ul className="text-gray-400 font-bold text-center hover:text-white">
              <li>Social Media Marketing</li>
              <li>Website Development</li>
              <li>Social Engine</li>
              <li>Marketing</li>
              <li>Chat Bots Development</li>
              <li>Graphic & UI-UX Design</li>
            </ul>
            <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a
                href="#slide1"
                className="btn btn-circle bg-blue-600 border border-blue-600"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-blue-600 border border-blue-600"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

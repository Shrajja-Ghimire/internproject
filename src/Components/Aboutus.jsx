import React from "react";
import Card from "./Card";
import AG from "../assets/AG.png";
import { NavLink } from "react-router";
const Aboutus = () => {
  return (
    <div className="md:ml-20">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-4 py-10">
        <img src={AG} className="w-full md:w-1/2 object-cover" alt="image" />
        <div className="md:text-left md:w-1/2 text-center md:p-10">
          <h1 className="text-4xl text-indigo-950 font-extrabold ">
            Create A Strong Business Presence
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            Combining our unrivaled specialism in specific digital activities
            with a strategic & differentiated approach, Aakash Labs is able to
            meet the increasingly complex needs of clients in an effortless yet
            productive manner in the constantly evolving digital landscape.
          </p>
          <NavLink to="/ourteam">
            <button className="hover:bg-blue-700 mt-7 bg-blue-500 rounded-3xl w-20 text-sm text-white p-2 md:w-30 font-bold">
              See all
            </button>
          </NavLink>
        </div>
      </div>

      <div className="p-10 text-center ">
        <h1 className="text-4xl text-indigo-950 font-extrabold mt-4">
          The Team You Look For
        </h1>
        <p className="mt-8 text-gray-700 text-center">
          Aakash Labs is headquartered in Nepal, providing digital marketing,
          data mining, and machine learning services to clients around the
          globe.
        </p>
      </div>
      <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <Card name="100%" detail="SATISFACTION" text="text-blue-400" />
        <Card name="254" detail="PROJECTS" text="text-orange-400" />
        <Card name="40768" detail="WORKING HOURS" text="text-blue-400" />
        <Card name="400" detail="LOVELY CLIENTS" text="text-orange-400" />
      </div>

      <div className="ml-10 mt-5">
        <h1 className="text-4xl text-indigo-950 font-extrabold mt-4 w-auto">
          Upskill Employees , Empower Clients
        </h1>
        <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
          Our experienced strategists will help you set an objective and choose
          your tools, developing a plan that is custom-built for your business.
        </p>

        <div className="md:flex justify-between items-center">
          <img src={AG} className="mt-10 w-full md:w-1/2" />
          <div className="md:p-10 mr-15">
            <h1 className="text-2xl text-indigo-950 font-extrabold mt-4">
              Our Values
            </h1>
            <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
              Aakash Labs provides an advanced implementation of digital
              technologies in areas that are crucial to your business,
              supporting your ambition and helping to retain your customer base.
              We give life to your ideas.
            </p>
            <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
              Aakash Labs combines tech expertise and business intelligence to
              catalyze change and deliver results. We make sure we add value to
              those businesses that aim to add value to their customers. When we
              first get to know you, we’ll immediately begin analyzing your
              website. We want to know everything we can about your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

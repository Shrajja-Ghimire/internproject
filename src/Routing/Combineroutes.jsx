import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Aboutus from "../Components/Aboutus";
import Contact from "../Components/Contact";
import OurTeam from "../Components/OurTeam";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import WeatherForecast from "../Components/WeatherForecast";

function Combineroutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Slider />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<WeatherForecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Combineroutes;

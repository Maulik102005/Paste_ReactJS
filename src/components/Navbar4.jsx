import React from "react";
import { NavLink } from "react-router-dom";

const Navbar4 = () => {
  return (
    <div className="flex flex-row justify-center gap-7 bg-[#003049] w-full fixed top-0 left-0 z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#90e0ef] font-bold transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
            : "text-white font-bold transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
        }
      >
        <h1>Home</h1>
      </NavLink>
      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          isActive
            ? "text-[#90e0ef] font-bold transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
            : "text-white font-bold transition-all duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
        }
      >
        <h1>Pastes</h1>
      </NavLink>
    </div>
  );
};

export default Navbar4;

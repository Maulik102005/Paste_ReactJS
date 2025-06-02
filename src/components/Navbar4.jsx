import React from "react";
import { NavLink } from "react-router-dom";

const Navbar4 = () => {
  return (
    <div className="flex flex-row justify-center gap-7 bg-white w-full fixed top-0 left-0 z-50">
      <NavLink to="/">
        <h1 className="text-black">Home</h1>
      </NavLink>
      <NavLink to="/pastes">
        <h1 className="text-black">Pastes</h1>
      </NavLink>
    </div>
  );
};

export default Navbar4;

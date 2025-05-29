import React from "react";
import { NavLink } from "react-router-dom";

const Navbar4 = () => {
  return (
    <div className="flex flex-row gap-7 place-content-evenly">
      <NavLink to="/">
        <h1 className="text-blue-500">Home</h1>
      </NavLink>
      <NavLink to="/pastes">
        <h1 className="text-blue-500">Pastes</h1>
      </NavLink>
    </div>
  );
};

export default Navbar4;

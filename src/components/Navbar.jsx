import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around py-4 w-full bg-neutral-900 text-white items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-righteous text-yellow-400">LAOS</h1>
        <h1 className="text-xs font-roboto_mono">HACKTOBERFEST 2023</h1>
      </div>
      <div className="flex gap-2">
        <a href="#" className="hover:text-blue-400">
          Home
        </a>
        <a href="#" className="hover:text-blue-400">
          About
        </a>
        <a href="#" className="hover:text-blue-400">
          Contacts
        </a>
      </div>
      <div className="flex">
        <button className="rounded-md px-4 py-1 text-white bg-teal-400 h-8 duration-200 font-roboto hover:text-teal-400 hover:bg-white hover:shadow-md hover:shadow-teal-400/50">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;

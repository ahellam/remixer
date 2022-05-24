import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className=" bg-neutral-800 p-2 rounded-sm grid grid-cols-12">
        <h1 className=" tracking-wide text-green-300 text-4xl p-1 col-span-2 text-center font-medium">R <span className="font-semibold text-green-400">E </span><span className="font-semibold text-green-500">M <span className="font-semibold text-green-600">I </span> X </span><span className="font-semibold text-green-400">E </span>R </h1>
        <NavLink to="/" className={({ isActive }) => [
              isActive
                ? "self-center text-green-400 animate-pulse font-bold hover:text-blue-600"
                : "self-center text-green-300 font-semibold hover:text-blue-600 active:font-bold",
            ]}>Home&nbsp;</NavLink>
        <NavLink to="/search" className={({ isActive }) => [
              isActive
                ? "self-center text-green-400 animate-pulse font-bold hover:text-blue-600"
                : "self-center text-green-300 font-semibold hover:text-blue-600 active:font-bold",
            ]}>Search&nbsp;</NavLink>
    </div>
  )
}

export default Navigation
import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation({ setIsAuthenticated, setUser, user}) {

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  };

  return (
    <div className=" bg-neutral-800 p-2 rounded-sm grid grid-cols-12">
        <h1 className=" tracking-wide text-green-300 text-4xl p-1 col-span-2 text-center font-medium">R <span className="font-semibold text-green-400">E </span>
        <span className="font-semibold text-green-500">M <span className="font-semibold text-green-600">I </span> X </span>
        <span className="font-semibold text-green-400">E </span>R </h1>
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
        <NavLink to="/playlists" className={({ isActive }) => [
              isActive
                ? "self-center text-green-400 animate-pulse font-bold hover:text-blue-600"
                : "self-center text-green-300 font-semibold hover:text-blue-600 active:font-bold",
            ]}>Playlists&nbsp;</NavLink>
        <NavLink to="/create" className={({ isActive }) => [
              isActive
                ? "self-center text-green-400 animate-pulse font-bold hover:text-blue-600"
                : "self-center text-green-300 font-semibold hover:text-blue-600 active:font-bold",
            ]}>Create&nbsp;</NavLink>
        <button 
        onClick={logout}
        className="
        col-start-12
        bg-neutral-600
        text-green-300
        rounded-sm
        mx-1
        my-2
        hover:bg-red-700
        active:bg-green-900">
          Log Out
        </button>
    </div>
  )
}

export default Navigation
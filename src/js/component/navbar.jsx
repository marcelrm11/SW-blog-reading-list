import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./favorites-list.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">STAR WARS</span>
      </Link>
      <div className="ml-auto">
        <FavoritesList favs={store.data.favorites} />
      </div>
    </nav>
  );
};

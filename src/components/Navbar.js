import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

  return (
      <nav className="navbar main-container fixed-top navbar-expand-lg  shadow-5-strong ">
        <ul className=" nav-links">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="movies">
              Popular Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="search">
              Search Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="watchlist">
              My Watchlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
  );
}

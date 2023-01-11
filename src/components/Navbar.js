import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
//   const [color, setColor] = useState(false);
//   const headerRef = useRef();
//   const changeColor = () => {
//     if (window.screenY > 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//     // className={color?'navbar-main fixed-top navbar-expand-lg  shadow-5-strong':'navbar-main fixed-top navbar-dark bg-dark'}
//   };
//   console.log(window.scrollY, "window");
//   useEffect(() => {
//     changeColor();
//   }, []);
  return (
    // <div
    //   ref={headerRef}
    //   className={
    //     color
    //       ? "navbar-main fixed-top "
    //       : "navbar-main fixed-top navbar-dark bg-dark"
    //   }
    // >
      <nav className="navbar main-container fixed-top navbar-expand-lg  shadow-5-strong ">
        <ul className=" nav-links">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Tv Series
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              My Watchlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Login
            </a>
          </li>
        </ul>
      </nav>
    // </div>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ links }) {
  const location = useLocation();

  return (
    <nav>
      <div>
        <h2>Jesse Denier</h2>
        <div id="navbarContent">
          <ul>
            {links.map((link) => {
              const { to, children } = link.props;
              const isActive = to === location.pathname;
              return (
                <li key={to} className={isActive ? "active" : ""}>
                  <Link to={to}>{children}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

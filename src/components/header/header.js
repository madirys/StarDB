import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/">StarDB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/">Peoples</a>
        </li>
        <li>
          <a href="/">Planets</a>
        </li>
        <li>
          <a href="/">Srarships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

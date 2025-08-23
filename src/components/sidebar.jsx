import React from "react";

const Sidebar = ({ offcanvasOpen }) => {
  return (
    <nav
      className={`sidebar sidebar-offcanvas ${offcanvasOpen ? "active" : ""}`}
      id="sidebar"
    >
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="mdi mdi-grid-large menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

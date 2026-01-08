import React from "react";

const menuItems = ["Analyze", "Mood Insights", "Playlist Match", "History"];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🎧 Smart Audio</h2>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${activePage === item ? "active" : ""}`}
            onClick={() => setActivePage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

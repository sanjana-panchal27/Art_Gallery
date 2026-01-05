import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">Art Gallery</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-actions">
          <input className="search" placeholder="Search artworks, artists..." />
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              className="cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1.6" fill="white" />
              <circle cx="18" cy="20" r="1.6" fill="white" />
            </svg>
            Cart
          </a>
        </div>
      </div>
    </header>
  );
}

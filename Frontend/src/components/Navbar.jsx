import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">Art Gallery</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

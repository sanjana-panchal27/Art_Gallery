import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <div style={{ fontWeight: 700 }}>Art Gallery</div>
            <small>Original art & prints — curated just for you.</small>
          </div>
          <div className="footer-col">
            <div style={{ fontWeight: 700 }}>Support</div>
            <small>Help Center</small>
            <br />
            <small>Shipping & Returns</small>
          </div>
          <div className="footer-col">
            <div style={{ fontWeight: 700 }}>Company</div>
            <small>About</small>
            <br />
            <small>Contact</small>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <small>© {new Date().getFullYear()} Art Gallery</small>
        </div>
      </div>
    </footer>
  );
}

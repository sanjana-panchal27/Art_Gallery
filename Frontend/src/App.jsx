import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./grid.jsx";
import Contact from "./components/Contact";
import React, { useEffect, useState } from "react";

export default function App() {
  const [route, setRoute] = useState(() =>
    typeof window !== "undefined" ? window.location.hash.slice(1) : ""
  );

  useEffect(() => {
    function onHash() {
      setRoute(window.location.hash.slice(1));
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {route === "contact" ? <Contact /> : <Grid />}
      </main>
      <Footer />
    </div>
  );
}

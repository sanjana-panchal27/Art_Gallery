import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./grid.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

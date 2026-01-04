import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <h1>Welcome to Art Gallery</h1>
        <p>Starter React app with Navbar and Footer.</p>
      </main>
      <Footer />
    </div>
  )
}

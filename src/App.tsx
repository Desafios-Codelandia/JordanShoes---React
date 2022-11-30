import React from "react"
import { Navbar } from "./components/navBar/navBar"
import { Hero } from "./components/heroSection/heroSection"
import { Destaques } from "./components/destaques/destaques"
import { Footer } from "./components/footer/footer"


export default function App() {

  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Destaques/>
        <Footer/>
    </div>
  )
}

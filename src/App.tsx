/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SacredSpaces from "./components/SacredSpaces";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SacredSpaces />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import AuthForm from "./components/AuthForm";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Contact/>
      <About />
      <Shop />
      <AuthForm />

      {/* Future Sections */}
      {/* <About /> */}
      {/* <Contact /> */}

      <footer className="bg-rose-600 text-white text-center p-4 mt-10">
        © 2025 Cafe Delight. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


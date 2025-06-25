import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/banner1.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to Cafe Delight</h2>
        <p className="text-xl mb-6">Where every sip tells a story</p>
        <a href="#menu" className="bg-rose-600 px-6 py-3 rounded text-white font-semibold hover:bg-rose-500">
          Explore Menu
        </a>
      </div>
    </section>
  );
}

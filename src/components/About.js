import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
        <img src="/your-cafe.jpeg" alt="Cafe" className="w-full mt-8 rounded-lg shadow" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to <span className="text-rose-600 font-semibold">Cafe Delight</span> — your cozy corner for handcrafted coffee, delicious treats, and
          warm ambiance. Whether you're catching up with friends, working remotely, or just enjoying a moment to yourself, we're here to serve you with care and passion.
          <br /><br />
          We source our ingredients locally, brew our coffee fresh, and always add a sprinkle of love in everything we do. Come in and make yourself at home!
        </p>
      </div>
    </section>
    
  );
}

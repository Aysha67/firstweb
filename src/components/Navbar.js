import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-600">Cafe Delight</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-rose-500">Home</a></li>
          <li><a href="#menu" className="hover:text-rose-500">Menu</a></li>
          <li><a href="#about" className="hover:text-rose-500">About</a></li>
          <a href="#blog">Blog</a>
          <a href="#auth" className="...">Login</a>
          <a href="#shop" className="text-gray-700 hover:text-rose-600 font-medium transition">
  🛍️ Shop
</a>
        </ul>
      </div>
    </nav>
  );
}


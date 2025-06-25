import React, { useState } from "react";

const products = [
  { id: 1, name: "Cappuccino", price: 4, image: "/capp.jpeg" },
  { id: 2, name: "Latte", price: 5, image: "/latte.webp" },
  { id: 3, name: "Croissant", price: 3, image: "/croissant.jpeg" },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <section id="shop" className="py-20 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Shop</h2>
        <p className="text-gray-500 mt-2">Order your favorite items</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-rose-600 font-bold mb-2">${item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-16 max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}


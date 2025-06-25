import React from "react";

export default function Menu() {
  const items = [
    { name: "Cappuccino", price: "$4", image: "/coffee.jpeg" },
    { name: "Veggie Sandwich", price: "$6", image: "/sandwich.jpg" },
    { name: "Avocado Toast", price: "$5", image: "/toast.jpg" },
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Menu</h2>
        <p className="text-gray-500 mt-2">Delicious and handcrafted with love</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-rose-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

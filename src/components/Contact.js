import React from "react";

const blogPosts = [
  {
    title: "5 Benefits of Drinking Coffee",
    date: "June 2025",
    summary:
      "Discover the surprising health benefits of your daily coffee ritual. From boosting energy to improving focus — here’s why it’s more than just a morning habit.",
  },
  {
    title: "Our New Dessert Menu is Here!",
    date: "May 2025",
    summary:
      "We’ve added new croissants, cheesecakes, and more to our dessert section. Come taste what’s new at Café Delight.",
  },
  {
    title: "Meet the Barista: Noman’s Coffee Journey",
    date: "April 2025",
    summary:
      "Learn the story behind our head barista, Noman — and what makes his brews special.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">From Our Blog</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-rose-600 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


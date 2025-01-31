"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8 mx-auto text-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 rounded-lg border bg-slate-800 border-slate-700 text-gray-100 focus:outline-none focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900/80 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-full object-contain p-4 bg-white"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-3 flex flex-col flex-grow">
              {/* Category */}
              <span className="text-sm text-blue-500 font-semibold">
                {product.category}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-100 line-clamp-2">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-yellow-500">
                  <FaStar />
                  <span className="ml-1 text-gray-200">
                    {product.rating.rate}
                  </span>
                </div>
                <span className="text-gray-400">
                  ({product.rating.count} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm  flex-grow">
                {product.description.slice(0,100)}...
              </p>

              {/* Price and Cart Button */}
              <div className="flex justify-between items-center pt-4 mt-auto">
                <span className="text-2xl font-bold text-gray-100">
                  ${product.price}
                </span>
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <FaShoppingCart className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

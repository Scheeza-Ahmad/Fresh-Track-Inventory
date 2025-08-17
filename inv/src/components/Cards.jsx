import React from "react";

const Cards = ({ image, name, price, quantity, onBuy }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-60 text-center hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-contain mx-auto mb-4"
      />

      {/* Product Name */}
      <h2 className="text-lg font-bold mb-2">{name}</h2>

      {/* Price & Quantity */}
      <p className="text-gray-700">Price: <span className="font-semibold">₹{price}</span></p>
      <p className="text-gray-500">Available: {quantity}</p>

      {/* Buy Button */}
      <button
        onClick={onBuy}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300"
      >
        Buy
      </button>
    </div>
  );
};

export default Cards;

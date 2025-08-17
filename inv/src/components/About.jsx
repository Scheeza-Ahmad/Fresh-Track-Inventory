import React from "react";
import Head from "../assets/images/about.png"; 
const About = () => {
  return (
    <>
    <div
      className="h-screen w-full bg-center bg-cover relative flex justify-center items-center"
      style={{ backgroundImage: `url(${Head})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative text-white text-lg max-w-3xl m-8 p-8 bg-black/60 rounded-xl shadow-lg">
        <h1 className="font-bold text-4xl mb-6 text-center">About Us</h1>

        <p className="mb-4">
          At <strong>Fresh Track Inventory</strong>, we believe that managing fruits 
          and vegetables should be as fresh and simple as the produce itself. 
          Our inventory system is designed to help shopkeepers, wholesalers, 
          and distributors keep track of stock effortlessly while reducing 
          waste and ensuring quality.
        </p>

        <h3 className="font-semibold text-2xl mt-4 mb-2">We focus on:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>🥦 Accuracy</strong> – Real-time updates on stock levels to avoid shortages and overstocking.</li>
          <li><strong>🍎 Freshness First</strong> – Track expiry dates and shelf life to minimize spoilage.</li>
          <li><strong>🍋 Ease of Use</strong> – A user-friendly interface for adding, updating, and managing products.</li>
          <li><strong>🍇 Smart Insights</strong> – Reports on sales, most sold items, and revenue to help make better decisions.</li>
          <li><strong>🍉 Sustainability</strong> – Encouraging efficient management that reduces food waste and supports healthier communities.</li>
        </ul>

        <p className="mt-6">
          Our goal is to provide a reliable and efficient platform that helps 
          businesses <strong>deliver fresh produce to customers while maximizing 
          profit and minimizing loss</strong>.
        </p>

        <p className="mt-4 font-semibold text-xl text-center">
          With Fresh Harvest Inventory, every fruit and vegetable counts! 🌱
        </p>
      </div>
    </div>
    </>
  );
};

export default About;

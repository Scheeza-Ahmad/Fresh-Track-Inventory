import React from "react";
import { useNavigate } from "react-router-dom";
import Fruit from "../assets/images/fruits.png";
import Vegetable from "../assets/images/vegetables.png";
import Main from "../assets/images/main.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center m-5">
        <img src={Main} alt="Main banner" className="rounded-xl shadow-lg" />
      </div>

      {/* Fruits Section */}
      <div className="flex justify-around items-center m-10 bg-green-50 p-6 rounded-xl shadow-md">
        <div>
          <img className="rounded-lg shadow-md w-64" src={Fruit} alt="fruits" />
        </div>
        <div className="max-w-xl text-green-900">
          <p className="font-bold text-xl leading-relaxed">
            "Fruits are nature’s gift, filled with energy, vitamins, and healing
            power. A person who eats fruits daily strengthens their body, mind,
            and immunity. Truly, healthy fruits are the key to a healthier,
            happier life." 🍎🥭🍇
          </p>
          <button
            onClick={() => navigate("/fruits")}
            className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Explore Fruits
          </button>
        </div>
      </div>

      {/* Business Invite Section */}
      <div className="flex justify-center items-center flex-col bg-amber-100 p-8 m-10 rounded-xl shadow-lg text-center">
        <p className="font-bold text-2xl text-amber-800 mb-4">
          You can become a part of our business by...
        </p>
        <button
          className="bg-amber-600 text-white px-6 py-2 rounded-lg shadow hover:bg-amber-700 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Vegetables Section */}
      <div className="flex justify-around items-center m-10 bg-green-50 p-6 rounded-xl shadow-md">
        <div className="max-w-xl text-green-900">
          <p className="font-bold text-xl leading-relaxed">
            "Vegetables are the foundation of true nourishment, bringing balance
            and strength to our lives. Each bite is nature’s medicine, packed
            with vitamins, minerals, and healing energy. A plate full of
            vegetables is a plate full of life, health, and vitality."
          </p>
          <button
            onClick={() => navigate("/vegetables")}
            className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Explore Vegetables
          </button>
        </div>
        <div>
          <img
            className="rounded-lg shadow-md w-64"
            src={Vegetable}
            alt="vegetables"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

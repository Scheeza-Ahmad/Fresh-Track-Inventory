import React, { useState } from "react";
import Card from "./Cards";
import Tomato from "../assets/images/tomato.png";
import Potato from "../assets/images/potato.png";
import Garlic from "../assets/images/garlic.png";
import Onion from "../assets/images/onion.png";
import Spinach from "../assets/images/spanich.png";
import Cucumber from "../assets/images/cucumber.png";
import Carrot from "../assets/images/carrot.png";
import Brinjal from "../assets/images/brinjal.png";
import Ginger from "../assets/images/ginger.png";

const Vegetables = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const itemList = selectedItems.map((item) => item.name).join(", ");

    alert(`Items: ${itemList}\nTotal Price: ${total}`);
    setSelectedItems([]); 
  };

  return (
    <div className="bg-[#F3F9D2] min-h-screen">
      <div className="flex flex-wrap gap-10 justify-center items-center m-6">
        <Card image={Tomato} name="Tomato" price={100} quantity={5} onBuy={() => handleChange({ name: "Tomato", price: 100 })} />
        <Card image={Potato} name="Potato" price={80} quantity={5} onBuy={() => handleChange({ name: "Potato", price: 80 })} />
        <Card image={Garlic} name="Garlic" price={120} quantity={5} onBuy={() => handleChange({ name: "Garlic", price: 120 })} />
        <Card image={Onion} name="Onion" price={90} quantity={5} onBuy={() => handleChange({ name: "Onion", price: 90 })} />
        <Card image={Spinach} name="Spinach" price={70} quantity={5} onBuy={() => handleChange({ name: "Spinach", price: 70 })} />
        <Card image={Cucumber} name="Cucumber" price={110} quantity={5} onBuy={() => handleChange({ name: "Cucumber", price: 110 })} />
        <Card image={Carrot} name="Carrot" price={95} quantity={5} onBuy={() => handleChange({ name: "Carrot", price: 95 })} />
        <Card image={Brinjal} name="Brinjal" price={130} quantity={5} onBuy={() => handleChange({ name: "Brinjal", price: 130 })} />
        <Card image={Ginger} name="Ginger" price={150} quantity={5} onBuy={() => handleChange({ name: "Ginger", price: 150 })} />
      </div>

      <div className="text-center m-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Vegetables;

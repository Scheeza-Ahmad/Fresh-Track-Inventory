import React, { useState } from "react";
import Card from "./Cards";
import Apple from "../assets/images/apple.png";
import Banana from "../assets/images/banana.png";
import Apricot from "../assets/images/apricot.png";
import Grapes from "../assets/images/grapes.png";
import Guava from "../assets/images/guava.png";
import Kiwi from "../assets/images/kivi.png";
import Mango from "../assets/images/mango.png";
import Peach from "../assets/images/peach.png";
import Pineapple from "../assets/images/pineapple.png";
import Plum from "../assets/images/plum.png";
import Watermelon from "../assets/images/watermellon.png";
import Peer from "../assets/images/Peer.png"; 
const Fruits = () => {
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
    <div className="bg-[#F3F9D2] ">

      <div className="flex flex-wrap gap-10 justify-center items-center m-6 bg-[#F3F9D2]">

        <Card image={Apple} name="Apple" price={100} quantity={5} onBuy={() => handleChange({ name: "Apple", price: 100 })} />
        <Card image={Banana} name="Banana" price={80} quantity={5} onBuy={() => handleChange({ name: "Banana", price: 80 })} />
        <Card image={Apricot} name="Apricot" price={120} quantity={5} onBuy={() => handleChange({ name: "Apricot", price: 120 })} />
        <Card image={Kiwi} name="Kiwi" price={90} quantity={5} onBuy={() => handleChange({ name: "Kiwi", price: 90 })} />
        <Card image={Pineapple} name="Pineapple" price={150} quantity={5} onBuy={() => handleChange({ name: "Pineapple", price: 150 })} />
        <Card image={Peach} name="Peach" price={110} quantity={5} onBuy={() => handleChange({ name: "Peach", price: 110 })} />
        <Card image={Watermelon} name="Watermelon" price={200} quantity={5} onBuy={() => handleChange({ name: "Watermelon", price: 200 })} />
        <Card image={Plum} name="Plum" price={95} quantity={5} onBuy={() => handleChange({ name: "Plum", price: 95 })} />
        <Card image={Grapes} name="Grapes" price={130} quantity={5} onBuy={() => handleChange({ name: "Grapes", price: 130 })} />
        <Card image={Guava} name="Guava" price={70} quantity={5} onBuy={() => handleChange({ name: "Guava", price: 70 })} />
        <Card image={Mango} name="Mango" price={160} quantity={5} onBuy={() => handleChange({ name: "Mango", price: 160 })} />
        <Card image={Peer} name="Peer" price={85} quantity={2} onBuy={() => handleChange({ name: "Peer", price: 85 })} />
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

export default Fruits;

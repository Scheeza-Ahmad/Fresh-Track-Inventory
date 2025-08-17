import React, { useState } from "react";
import Header from "../assets/images/contact.png"; // background image
const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The form data is : ", formData);
    alert("The form is submitted successfully ✅");
    setformData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
        <div
      className="h-screen w-full bg-cover bg-center relative flex justify-center items-center"
      style={{ backgroundImage: `url(${Header})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 bg-white/80 p-10 rounded-xl shadow-lg w-[90%] max-w-lg">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="mt-2 text-center">We’d love to hear from you!</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block mb-1">Enter your name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Enter your email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Enter your phone number:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Enter your feedback:</label>
            <textarea
              name="message"
              placeholder="Write your feedback"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-xl p-2"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded-xl py-2 hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>

  );
};

export default Contact;

import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <div
      className="p-8 flex justify-center flex-col items-center 
             bg-gradient-to-r from-green-700 to-green-600 
                        text-white font-bold list-none shadow-md"
    >
      <button
        className="p-2 border border-amber-200 rounded-md 
                   hover:bg-amber-600 hover:text-white 
                   transition duration-300"
        onClick={scrollToTop}
      >
        Move to top
      </button>
      <p className="font-bold pt-5 tracking-wide">
        © 2022 FreshTrack, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

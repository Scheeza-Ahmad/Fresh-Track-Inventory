import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="flex justify-between items-center p-6 pl-9 pr-9 
                        bg-gradient-to-r from-green-700 to-green-600 
                        text-white font-bold list-none shadow-md">
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-2xl tracking-wide">FreshTrack</h3>
          </div>

          <Link to="/" className="hover:text-amber-300 transition">
            <li>Home</li>
          </Link>

          <div className="relative group">
            <button className="hover:text-amber-300 transition">Inventory ▼</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
              <Link to="/fruits" className="block px-4 py-2 text-gray-800 hover:bg-green-100">
                Fruits
              </Link>
              <Link to="/vegetables" className="block px-4 py-2 text-gray-800 hover:bg-green-100">
                Vegetables
              </Link>
              <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-green-100">
                All Items
              </Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-amber-300 transition">
            <li>Contact</li>
          </Link>
          <Link to="/about" className="hover:text-amber-300 transition">
            <li>About</li>
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout;

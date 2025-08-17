import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* All routes with navbar (Layout) */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> {/* Home is default */}
              <Route path="fruits" element={<Fruits />} />
              <Route path="vegetables" element={<Vegetables />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>

        {/* Footer visible everywhere */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

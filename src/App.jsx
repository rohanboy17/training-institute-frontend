import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Centre from "./pages/Centre";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Programmes from "./pages/Programmes";
import Placements from "./pages/Placements";
import Faculty from "./pages/Faculty";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/centre/:name" element={<Centre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

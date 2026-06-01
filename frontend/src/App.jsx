import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Dashboard from "./admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-950">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}
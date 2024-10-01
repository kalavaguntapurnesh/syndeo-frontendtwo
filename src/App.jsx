import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/pricing" element={<Pricing />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

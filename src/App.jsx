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
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MySchedules from "./pages/MySchedules";
import Profile from "./pages/Profile";
import CreateSchedule from "./pages/CreateSchedule";

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

        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/createSchedule" element={<CreateSchedule />}></Route>

        <Route path="/bookings" element={<MySchedules />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route
          path="/resetPassword/:id/:token"
          element={<ResetPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

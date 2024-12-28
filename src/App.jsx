import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
// import Dashboard from "./pages/Dashboard";
// import MySchedules from "./pages/MySchedules";
// import Profile from "./pages/Profile";
// import CreateSchedule from "./pages/CreateSchedule";
// import AddEmployees from "./pages/AddEmployees";
// import AllEmployees from "./pages/AllEmployees";
// import { useSelector } from "react-redux";
// import Spinner from "./components/Spinner";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";
// import EmployeeSchedules from "./pages/EmployeeSchedules";

function App() {
  // const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>

        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route
          path="/resetPassword/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        {/* <Route
            path="/addEmployees/:id"
            element={
              <ProtectedRoute>
                <AddEmployees />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/allEmployees/:id"
            element={
              <ProtectedRoute>
                <AllEmployees />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/employeeSchedules/:id"
            element={
              <ProtectedRoute>
                <EmployeeSchedules />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/createSchedule/:id"
            element={
              <ProtectedRoute>
                <CreateSchedule />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/bookings/:id"
            element={
              <ProtectedRoute>
                <MySchedules />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route> */}
      </Routes>
      {/* )} */}
    </BrowserRouter>
  );
}

export default App;

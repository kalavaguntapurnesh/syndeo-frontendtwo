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
import AddEmployees from "./pages/AddEmployees";
import AllEmployees from "./pages/AllEmployees";
import PageNotFound from "./pages/PageNotFound";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/privacy"
            element={
              <PublicRoute>
                <Privacy />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/pricing"
            element={
              <PublicRoute>
                <Pricing />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/forgotPassword"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/resetPassword/:id/:token"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="*"
            element={
              <PublicRoute>
                <PageNotFound />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/addEmployees"
            element={
              <ProtectedRoute>
                <AddEmployees />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/allEmployees"
            element={
              <ProtectedRoute>
                <AllEmployees />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/createSchedule"
            element={
              <ProtectedRoute>
                <CreateSchedule />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/bookings"
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
          ></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

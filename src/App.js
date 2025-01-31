import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tips from "./pages/Tips";
import Login from "./components/signIn/Login";
import InfoGraphics from "./pages/InfoGraphics";
import Home from "./pages/Home";
import ProtectedRoute from "./components/signIn/ProtectedRoute";
import Register from "./components/signIn/Register";
import VerifyOtp from "./components/signIn/OtpVerify";
import Dashboard from "./pages/dashboard/Dashboard";
import Resources from "./pages/dashboard/Resources";
import Articles from "./pages/dashboard/Articles"
import Assessments from "./pages/dashboard/Assessments"
import Cources from "./pages/dashboard/Cources"
import Users from "./pages/dashboard/Users"
import Videos from "./pages/dashboard/Videos"
import Settings from "./pages/dashboard/Settings"
import User from "./layouts/User";
import Admin from "./layouts/Admin";
import AddResources from "./components/dashboard/resources/AddResources";
import CategoryList from "./components/dashboard/resources/CategoryList";
import AddCategory from "./components/dashboard/resources/AddCategory";
import Pricing from "./pages/dashboard/Pricing";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route element={<User />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verify" element={<VerifyOtp />} />
          <Route path="/tips" element={<ProtectedRoute><Tips /></ProtectedRoute>} />
          <Route path="/infographics" element={<ProtectedRoute><InfoGraphics /></ProtectedRoute>} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute><Admin /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />}/>
          <Route path="/addResources" element={<AddResources />}/>
          <Route path="/category" element={<CategoryList />}/>
          <Route path="/addCategory" element={<AddCategory />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/assessments" element={<Assessments />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/courses" element={<Cources />}/>
          <Route path="/settings" element={<Settings />}/>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;

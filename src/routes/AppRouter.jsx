import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StarHello from "../pages/StarHello";
import Inner from "../pages/Inner";
import Program from "../pages/Program";
import Absence from "../pages/Absence";
import Activity from "../pages/Activity";
import MealSchedule from "../pages/MealSchedule";
import Etc from "../pages/Etc";
import EnvirmentEdu from "../pages/EnvirmentEdu";
import Membership from "../pages/Membership";
import Way from "../pages/Way";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starHello" element={<StarHello />} />
      <Route path="/inner" element={<Inner />} />
      <Route path="/program" element={<Program />} />
      <Route path="/absence" element={<Absence />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/mealSchedule" element={<MealSchedule />} />
      <Route path="/etc" element={<Etc />} />
      <Route path="/envirmentEdu" element={<EnvirmentEdu />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/way" element={<Way />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Password from "./pages/password/Password";
import Task from "./pages/task/task";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/screen-login" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<Password />} />
        <Route path="/screen-login/dashboard" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

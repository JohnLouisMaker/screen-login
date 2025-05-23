import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/login/login";
import Signup from "./pages/signup/signup"; 
import Password from "./pages/password/password";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route path="/screen-login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<Password />} />

      </Routes>
    </BrowserRouter>
  );
}

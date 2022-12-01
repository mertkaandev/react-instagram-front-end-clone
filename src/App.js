import React from "react";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Messenger from "./pages/messenger/Messenger.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:username" element={<Profile />}></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

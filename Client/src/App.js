import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from "./Pages/auth/Registercomplete";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import RegisterComplete from "./Pages/auth/RegisterComplete";
import Home from "./Pages/Home";
import Header from "./Components/nav/Header";
const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/register/complete" element={<RegisterComplete />} />
      </Routes>
    </>
  );
};

export default App;

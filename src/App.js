import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Transaction from "./pages/Transaction";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

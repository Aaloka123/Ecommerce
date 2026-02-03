import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UserPage/Home";
import Medicines from "./UserPage/Medicine";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

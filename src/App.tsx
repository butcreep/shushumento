import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CampDetail from "./pages/CampDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camp/:campId" element={<CampDetail />} />
      </Routes>
    </>
  );
};

export default App;

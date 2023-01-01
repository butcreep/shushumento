import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CampDetail from "./pages/CampDetail";
import GlobalStyled from "styles/global";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camp/:campId" element={<CampDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

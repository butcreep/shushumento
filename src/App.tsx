import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CampDetail from "./pages/CampDetail";
import GlobalStyled from "styles/global";

const App = () => {
  return (
    <>
      {/* TODO: camp detail 컴포넌트에 key줘야 함 */}
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

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Search } from "../pages/Search";
import { Response } from "../pages/Response";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:cep" element={<Response />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./components/header";
import Favoritos from "./pages/favoritos";
import Erro from "./pages/erro";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

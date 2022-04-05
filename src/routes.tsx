import { Routes, Route } from "react-router-dom";
import { Achados } from "./pages/Achados";
import { Avisos } from "./pages/Avisos";
import { Documentos } from "./pages/Documentos";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Ocorrencias } from "./pages/Ocorrencias";
import { Reservas } from "./pages/Reservas";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/avisos" element={<Avisos />}></Route>
      <Route path="/Achados" element={<Achados />}></Route>
      <Route path="/Docuemntos" element={<Documentos />}></Route>
      <Route path="/Reservas" element={<Reservas />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/ocorrencias" element={<Ocorrencias />}></Route>
      <Route path="/logout" element={<Logout></Logout>}></Route>
    </Routes>
  );
};

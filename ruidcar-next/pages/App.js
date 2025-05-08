// src/App.jsx
import { Routes, Route } from "react-router-dom";
import OficinasProximas from "./pages/OficinasProximas";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DashboardUsuario from "./pages/Dashboard/Usuario";
import DashboardPrestador from "./pages/Dashboard/Prestador";
import DashboardAdmin from "./pages/Dashboard/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/oficinas" element={<OficinasProximas />} />

      <Route path="/dashboard/usuario" element={<DashboardUsuario />} />
      <Route path="/dashboard/prestador" element={<DashboardPrestador />} />
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
    </Routes>
  );
}

export default App;

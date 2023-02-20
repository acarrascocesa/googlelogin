import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MyRoutes = () => {
  // Para validar que usuario se ha logueado
  const {user} = userAuth();

  const RequireAuth = ({children}) => {
    return user ? children : <Navigate to={"/login"} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth>
          <Home />
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

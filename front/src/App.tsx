import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AdminPage from "./components/admin/AdminPage";
import Home from "./components/home/Home";
import Cadastro from "./components/public/Cadastro";
import Login from "./components/public/Login";
import UserService from "./services/UserService";

const userService = new UserService();

function App() {
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);

  useEffect(() => {
    setIsAuthenticated(userService.isAuthenticated());
  }, []);

  return (
    <Routes>
        <Route path="/admin" element={<AdminPage />} />

      <Route
        path="/"
        element={
          <Navigate to={isAuthenticated ? "home" : "login"} replace />
        }
      />

      {isAuthenticated && <Route path="/home" element={<Home />} />}

      {!isAuthenticated && (
        <>
          <Route
            path="/login"
            element={
              <Login
                afterAutentication={() => {
                  setIsAuthenticated(true);
                  navigate('/home')
                }}
              />
            }
          />
          <Route
            path="/cadastro"
            element={
              <Cadastro
                afterAutentication={() => {
                  setIsAuthenticated(true);
                }}
              />
            }
          />
        </>
      )}
    </Routes>
  );
}

export default App;

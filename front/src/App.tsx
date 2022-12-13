import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Cadastro from "./components/public/Cadastro";
import Login from "./components/public/Login";
import UserService from "./services/UserService";

const userService = new UserService();

function App() {
  const [isAutenticated, setIsAutenticated] = useState(false);

  useEffect(() => {
    setIsAutenticated(userService.isAutenticate());
  }, []);

  if (isAutenticated) return <Home />;
  else
    return (
      <Routes>
        <Route
          path="/"
          element={<Login afterAutentication={() => setIsAutenticated(true)} />}
        />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    );
}

export default App;

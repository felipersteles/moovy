import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cadastro from "./components/public/Cadastro";
import Login from "./components/public/Login";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  );
}

export default App;

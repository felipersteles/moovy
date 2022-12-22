import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { LoginReq } from "../../types/LoginReq.type";
import InputPublico from "../shared/inputPublico";

type Props = {
  afterAutentication: any;
};

const userGenerico: LoginReq = {
  username: "",
  password: "",
};

const userService = new UserService();

const Login = (props: Props) => {
  const [user, setUser] = useState(userGenerico);
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const aoSubmeter = async (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    //console.log(user);
    debugger;
    if (!estaSubmetendo) {
      setEstaSubmetendo(true);
      try {
        await userService.login(user);
        debugger;
        if (props.afterAutentication) {
          debugger;
          props.afterAutentication();
        }
      } catch (error) {
        alert(error);
      }
    }

    debugger;
    setEstaSubmetendo(false);
  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <h1>Moovy</h1>
      </div>
      <div className="containerInput">
        <form onSubmit={aoSubmeter}>
          <InputPublico
            user={user}
            nome={"username"}
            placeholder={"Email"}
            setUser={setUser}
          />
          <InputPublico
            user={user}
            nome={"password"}
            placeholder={"Senha"}
            setUser={setUser}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="containerRodape">
        <Link to="/cadastro">
          Recebeu um convite?
          <br />
          <span className="cadastro">Faça seu cadastro!</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { LoginReq } from "../../types/LoginReq.type";
import { InputWithPasswordIcon } from "../Inputs/InputWithPasswordIcon";
import { InputWithUserIcon } from "../Inputs/InputWithUserIcon";

type Props = {
  afterAutentication: any;
};

const userGenerico: LoginReq = {
  username: "",
  password: "",
};

const userService = new UserService();

const Login = ({ afterAutentication }: Props) => {
  const [user, setUser] = useState(userGenerico);
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value)
    const { name, value } = e.currentTarget;

    setUser({ ...user, [name]: value });
  };

  const aoSubmeter = async (e: React.FormEvent) => {
    e.preventDefault();

    userService
      .login(user)
      .then(() => {
        if (afterAutentication) {
          afterAutentication();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <h1>Moovy</h1>
      </div>
      <div className="containerInput">
        <form onSubmit={aoSubmeter}>
          <InputWithUserIcon
            placeholder="username"
            name="username"
            onChangeHandler={onChangeHandler}
          />
          <InputWithPasswordIcon
            placeholder="password"
            type="password"
            name="password"
            onChangeHandler={onChangeHandler}
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { CadastroReq } from "../../types/CadastroReq.type";
import { InputWithEmailIcon } from "../Inputs/InputWithEmailIcon";
import { InputWithPasswordIcon } from "../Inputs/InputWithPasswordIcon";
import { InputWithUserIcon } from "../Inputs/InputWithUserIcon";

type Props = {
  afterAutentication: () => void;
};

const userService = new UserService();

const userCadastro: CadastroReq = {
  username: "",
  email: "",
  password: "",
};

const Cadastro = (props: Props) => {
  const [user, setUser] = useState(userCadastro);
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value)
    const { name, value } = e.currentTarget;

    if (name === "passwordConfirm") setConfirmarsenha(value);
    else setUser({ ...user, [name]: value });
  };

  const aoSubmeter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (estaSubmetendo) return;

    console.log(user);

    if (user.password === confirmarsenha) {
      userService.cadastro(user).then(() => {
        setEstaSubmetendo(true);
        alert("Usuário criado!");

        userService
          .login({
            username: user.username,
            password: user.password,
          })
          .then(() => {
            props.afterAutentication();
            navigate("/home");
            setEstaSubmetendo(false);
          });
      }).catch(() => {
        alert("Usuário já existente");
      });
    } else alert("As senhas não são iguais");

  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <h1>Moovy</h1>
      </div>
      <div className="containerInput">
        <form onSubmit={aoSubmeter}>
          <InputWithUserIcon
            onChangeHandler={onChangeHandler}
            placeholder="username"
            name="username"
          />
          <InputWithEmailIcon
            onChangeHandler={onChangeHandler}
            placeholder="email"
            name="email"
          />
          <InputWithPasswordIcon
            onChangeHandler={onChangeHandler}
            placeholder="password"
            name="password"
            type="password"
          />
          <InputWithPasswordIcon
            onChangeHandler={onChangeHandler}
            placeholder="confirm password"
            name="passwordConfirm"
            type="password"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="containerRodape">
        <Link to="/">
          Já tem uma conta?
          <br />
          <span className="cadastro">Entre agora!</span>
        </Link>
      </div>
    </div>
  );
};

export default Cadastro;

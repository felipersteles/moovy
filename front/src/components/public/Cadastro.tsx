import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { CadastroReq } from "../../types/CadastroReq.type";
import InputPublico from "../shared/inputPublico";

type Props = {};

const userService = new UserService();

const userCadastro: CadastroReq = {
  email: "",
  password: "",
};

const Cadastro = (props: Props) => {
  const [user, setUser] = useState(userCadastro);
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value)
    const { name, value } = e.currentTarget;

    if (name === "confirmarsenha") setConfirmarsenha(value);
    else setUser({ ...user, [name]: value });
  };

  const aoSubmeter = async (e: React.FormEvent) => {
    if (estaSubmetendo) return;

    await userService.cadastro(user);
    e.preventDefault();
    if (user.password === confirmarsenha) {
      //console.log(user)
      setEstaSubmetendo(true);
      alert("Usuário criado! Faça login");
    } else alert("As senhas não são iguais");
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
            nome={"email"}
            placeholder={"Email"}
            setUser={setUser}
          />
          <InputPublico
            user={user}
            nome={"password"}
            placeholder={"Senha"}
            setUser={setUser}
          />
          <input
            type="password"
            id="confirmarsenha"
            name="confirmarsenha"
            onChange={inputTextHandler}
            placeholder="Confirmar senha"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="containerRodape">
        <Link to="/login">
          Já tem uma conta?
          <br />
          <span className="cadastro">Entre agora!</span>
        </Link>
      </div>
    </div>
  );
};

export default Cadastro;

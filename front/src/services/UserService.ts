import { LoginReq } from "../types/LoginReq.type";
import { CadastroReq } from "../types/CadastroReq.type";
import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(credenciais: LoginReq) {
    const { data } = await this.post("users/login", credenciais);

    localStorage.setItem('email', data.email);
    localStorage.setItem('token', data.access_token);
  }

  async cadastro(dados: CadastroReq) {
    return this.post("users/cadastro", dados);
  }
}
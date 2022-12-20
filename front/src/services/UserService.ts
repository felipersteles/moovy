import { LoginReq } from "../types/LoginReq.type";
import { CadastroReq } from "../types/CadastroReq.type";
import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async login(credenciais: LoginReq) {
    const { data } = await this.post("users/login", credenciais);

    localStorage.setItem('username', data.username);
    localStorage.setItem('token', data.access_token);
  }

  cadastro(dados: CadastroReq) {
    return this.post("users/cadastro", dados);
  }

  getProfile() {
    return this.get("users/profile")
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
}

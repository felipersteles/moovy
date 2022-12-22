import HttpService from "../../services/HttpService";
import { LoginReq } from "../../types/LoginReq.type";

export class AdminService extends HttpService {
  async login(credencias: LoginReq) {
    const { data } = await this.post(
      "http://localhost:3333/admin/login",
      credencias
    );

    localStorage.setItem("superuser", data.superuser);
    localStorage.setItem("token", data.access_token);
  }

  isAdmin(): Boolean | undefined {
    if (localStorage.getItem("token") !== null)
      return (localStorage.getItem("superuser") !== null);
  }
}

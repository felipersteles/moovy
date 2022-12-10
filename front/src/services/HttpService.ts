import axios from "axios";

export default class HttpService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3333/',
    });
  }

  post(url: string, data: any) {
    return this.axios.post(url, data);
  }

  get(url: string) {
    return this.axios.get(url);
  }
}

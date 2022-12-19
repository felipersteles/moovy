import axios from "axios";

export default class HttpService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3333/",
    });

    this.axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });
  }

  post(url: string, data: any) {
    return this.axios.post(url, data);
  }

  get(url: string) {
    return this.axios.get(url);
  }

  postForm(url: string, data: any) {
    return this.axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}

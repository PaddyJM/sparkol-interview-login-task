import axios from "axios";
import toast from "react-hot-toast";

type LoginResponse = {
  user: {
    name: string;
    id: number;
  };
  token: string;
};

export default class Client {
  private AUTH_SERVICE_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

  async login(username: string, password: string) {
    let response;
    try {
      response = await axios.post<LoginResponse>(
        `${this.AUTH_SERVICE_URL}/login`,
        { username, password }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Invalid username or password");
          console.error("Invalid username or password");
        }
        console.error(error.response?.data);
      }
      throw new Error("Login failed");
    }

    return response.data;
  }
}
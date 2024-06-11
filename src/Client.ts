import axios from "axios";
import toast from "react-hot-toast";

type LoginResponse = {
  user: {
    name: string;
    id: number;
    lastLoggedIn: string;
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
          console.error(error);
        } else {
          toast.error("An error occurred. Please try again later.");
          console.error(error);
        }
      } else {
        toast.error("An error occurred. Please try again later.");
        console.error(error);
      }
      return;
    }

    return response.data;
  }
}

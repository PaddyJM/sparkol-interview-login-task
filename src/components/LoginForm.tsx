import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type LoginResponse = {
  user: {
    name: string;
    id: number;
  };
  token: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setUsername = useAuthStore((state) => state.setUsername);

  const handleLogin = async () => {
    let response;
    try {
      response = await axios.post<LoginResponse>(
        "http://localhost:3333/login",
        {
          username: (document.getElementById("username") as HTMLInputElement)
            .value,
          password: (document.getElementById("password") as HTMLInputElement)
            .value,
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error("Invalid username or password");
          console.error("Invalid username or password");
        }
        console.error(error.response?.data);
      }
    }

    if (!response) {
      return;
    }

    setIsLoggedIn(true);
    setUsername(response.data.user.name);

    localStorage.setItem("token", response.data.token);

    console.log("Redirecting to /");
    navigate("/");
  };
  return (
    <div id="login-form">
      <p>Login to your account:</p>
      <br />
      <label>Username:</label>
      <input type="text" id="username" name="username" />
      <br /> <br />
      <label>Password:</label>
      <input type="password" id="password" name="password" />
      <br /> <br />
      <button id="login" onClick={handleLogin}>
        Login
      </button>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </div>
  );
};

export default LoginForm;

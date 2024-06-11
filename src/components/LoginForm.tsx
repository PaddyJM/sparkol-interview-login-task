import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import { Toaster } from "react-hot-toast";
import Client from "../Client";

const client = new Client();

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setUsername = useAuthStore((state) => state.setUsername);
  const setLastLoggedIn = useAuthStore((state) => state.setLastLoggedIn);

  const handleLogin = async () => {
    const data = await client.login(
      (document.getElementById("username") as HTMLInputElement).value,
      (document.getElementById("password") as HTMLInputElement).value
    );

    if (!data) return;

    setLastLoggedIn(data.user.lastLoggedIn)
    setIsLoggedIn(true);
    setUsername(data.user.name);

    localStorage.setItem("token", data.token);

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

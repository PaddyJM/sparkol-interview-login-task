import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setUsername = useAuthStore((state) => state.setUsername);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername((document.getElementById("username") as HTMLInputElement).value);
    console.log('Redirecting to /')
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
    </div>
  );
};

export default LoginForm;

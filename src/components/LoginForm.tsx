import React from "react";

function LoginForm() {
  return (
    <form id="login-form">
      <p>Login to your account:</p>
      <br />
      <label>Username:</label>
      <input type="text" id="username" name="username" />
      <br /> <br />
      <label>Password:</label>
      <input type="password" id="password" name="password" />
      <br /> <br />
      <button id="login">Login</button>
    </form>
  );
}

export default LoginForm;
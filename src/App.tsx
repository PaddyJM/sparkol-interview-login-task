import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <form id="login-form">
        <input type="text" id="username" name="username" />
        <br /> <br />
        <input type="password" id="password" name="password" />
        <br /> <br />
        <button id="login">Login</button>
      </form>
    </div>
  );
}

export default App;

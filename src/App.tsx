import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={isLoggedIn ? <h1>Welcome!</h1> : <Navigate to='/login'/>}/>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

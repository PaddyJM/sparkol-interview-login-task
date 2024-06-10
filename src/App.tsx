import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import LoginForm from "./components/LoginForm";
import useAuthStore, { AuthState } from "./stores/authStore";

function App() {
  const isLoggedIn = useAuthStore((state: AuthState) => state.isLoggedIn)

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

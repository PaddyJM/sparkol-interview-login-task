import React from "react";
import useAuthStore from "../stores/authStore";

type WelcomeProps = {
  username: string;
};

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const handleLogout = () => {
    console.log('Logging out...')
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Welcome {username}!</h1>
      <br /> <br />
      <button id="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;

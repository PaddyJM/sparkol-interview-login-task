import React from "react";

type WelcomeProps = {
  username: string;
}

const Welcome: React.FC<WelcomeProps> = ({username}) => {
  return <h1>Welcome {username}!</h1>;
};

export default Welcome;
import React from "react";
import '../Styles/Header.css'; 

const Header = () => {
  let numberOfUsers = 24;
  return (
    <div id="overall">
      <h1>Twitter</h1>
        <p className="tabs">Latest</p>
        <p className="tabs">Explore</p>
        <p className="tabs">Settings</p>
      <p id="total-users">Number of users: {numberOfUsers}</p>
    </div>
  );
};

export default Header;
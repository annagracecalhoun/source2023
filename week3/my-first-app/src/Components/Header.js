import React from "react";

const Header = () => {
  let headerTitle = "This is the header";
  let numberOfUsers = 24;
  return (
    <div>
      <p>{headerTitle}</p>
      <p>Number of users: {numberOfUsers}</p>
    </div>
  );
};

export default Header;
import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/NavBar.css";

const NavBar = () => {
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  const handleHome = (e) => {
    e.preventDefault();
    history.push("/");
  };
  const handleSupport = (e) => {
    e.preventDefault();
    history.push("/support");
  };
  const handleProfile = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  return (
    <div className="navBar">
      <a onClick={handleSignup} href="/signup">
        Sign-Up
      </a>
      <a onClick={handleLogin} href="/login">
        Login
      </a>
      {/* <a onClick={handleSupport} href="/support">
        Contact Admin
      </a> */}
      {/* <a onClick={handleProfile} href="/profile">
        Profile
      </a> */}
      <a onClick={handleHome} href="/">
        Home
      </a>
    </div>
  );
};

export default NavBar;

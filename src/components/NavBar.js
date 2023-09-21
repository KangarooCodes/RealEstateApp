import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/NavBar.css";

const NavBar = () => {
  const [username, setUsername] = useState("Your Page!");
  useEffect(() => {
    const user = sessionStorage.getItem("userData");
    if (sessionStorage.getItem("userData")?.includes("true")) {
      setUsername(user.slice(28, -2));
    }
  }, []);
  const [showLoggedIn, setShowLoggedIn] = useState("hidden");
  const [hideLoggedIn, setHideLoggedIn] = useState("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("userData")?.includes("true")) {
      // console.log(sessionStorage.getItem("userData"));
      setShowLoggedIn("visible");
      setHideLoggedIn("hidden");
    } else {
      setShowLoggedIn("hidden");
      setHideLoggedIn("visible");
    }
  }, []);

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

  return (
    <div className="navBar">
      <a className={hideLoggedIn} onClick={handleSignup} href="/signup">
        Sign-Up
      </a>
      <a className={hideLoggedIn} onClick={handleLogin} href="/login">
        Login
      </a>
      <a href="/">Home</a>
      <a className={showLoggedIn} href="/profile">
        {username}
      </a>
    </div>
  );
};

export default NavBar;

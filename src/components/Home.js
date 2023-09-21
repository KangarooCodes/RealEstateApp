import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Home.css";
import SearchForm from "./SearchForm";
import logo from "../assets/images/logo.png";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem("userData")?.includes("false")) {
      history.push("/login");
    } else if (sessionStorage.getItem("userData")?.includes("true")) {
    }
  }, []);
  return (
    <div>
      <img src={logo} alt="logo"></img>
      <SearchForm />
    </div>
  );
};

export default Home;

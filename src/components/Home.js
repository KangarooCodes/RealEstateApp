import React from "react";
import "../assets/css/Home.css";
import SearchForm from "./SearchForm";
import logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <div>
      <img src={logo} alt="logo"></img>
      <SearchForm />
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import "./SearchForm";
import "../assets/css/Results.css";
import Result from "./Result";
import formSubmit from "./SearchForm";
// import { PropertyContext } from "./CreateContext";

const Results = () => {
  const handleResArr = () => {
    console.log(formSubmit);
  };
  // const homeValues = useContext(PropertyContext);
  return (
    <>
      <button onClick={handleResArr}>Here</button>
      <ul>
        <Result />
        <Result />
      </ul>
    </>
  );
};

export default Results;

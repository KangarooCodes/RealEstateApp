import React, { useContext } from "react";
import "./SearchForm";
import "../assets/css/Results.css";
import Result from "./Result";
import { v4 as uuidv4 } from "uuid";

const Results = () => {
  return (
    <ul>
      <li key={uuidv4}>
        <Result
          prop_id={1234}
          beds={1}
          baths={2}
          price={500}
          prop_type={"condo"}
          sqft={1000}
          address={"1 dreary lane"}
          photo={null}
        />
      </li>
    </ul>
  );
};

export default Results;

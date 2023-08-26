import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from "reactstrap";
import Img from "../assets/images/noImg.PNG";
import "./SearchForm";
import "../assets/css/Result.css";

const Result = (props) => {
  return (
    <Card className="Card" id={props.prop_id}>
      <CardBody className="Card-Body">
        <CardTitle>
          <CardImg alt="house" className="Card-Image" src={props.photo || Img}></CardImg>
        </CardTitle>
        <CardSubtitle className="Card-Subtitle">
          {props.price || "Unlisted Cost"} - {props.prop_type}
        </CardSubtitle>
        <CardText className="Card-Text">
          <span className={"Card-Spans"} style={{ fontWeight: "bold" }}>
            {props.beds || "Unknown"}
          </span>{" "}
          Beds
          <span className={"Card-Spans"} style={{ fontWeight: "bold" }}>
            {props.baths || "Unknown"}
          </span>{" "}
          Baths
          <span className={"Card-Spans"} style={{ fontWeight: "bold" }}>
            {props.sqft || "Unknown"}
          </span>{" "}
          sqft
          <br />
          <br />
          {props.street}
          <br />
          {props.city}, {props.state_code} {props.zip}
        </CardText>
        <div className="wrapper">
          <a className="Card-Button" href={props.realtorLink}>
            More Details
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default Result;

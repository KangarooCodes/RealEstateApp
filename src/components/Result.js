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
          {props.beds || "Unknown"} Beds - {props.baths || "Unknown"} Baths -{" "}
          {props.sqft || "Unknown"} sqft
          <br />
          <br />
          {props.street}, {props.city}
          <br />
          {props.state_code} {props.zip}
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

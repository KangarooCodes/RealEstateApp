import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import noImg from "../assets/images/noImg.PNG";
import "./SearchForm";
import "../assets/css/Result.css";

const Result = (props) => {
  return (
    <div>
      <Card className="Card" id={props.prop_id}>
        <CardBody className="Card-Body">
          <CardTitle>
            <CardImg
              alt="house"
              className="Card-Image"
              src={props.photo || noImg}
            ></CardImg>
          </CardTitle>
          <div className="Card-Banner">
            <CardSubtitle className="Card-Subtitle">
              {props.price || "Unlisted Cost"} - {props.prop_type}
            </CardSubtitle>
            <CardText className="Card-Text">
              <span className={"Card-Spans"}>{props.beds || "N/A"}</span>{" "}
              Beds
              <span className={"Card-Spans"}>
                {props.baths || "N/A"}
              </span>{" "}
              Baths
              <span className={"Card-Spans"}>
                {props.sqft || "N/A"}
              </span>{" "}
              sqft
              <br />
              <a className="Card-Button" href={props.realtorLink}>
                Book Appointment
              </a>
              <br />
              {props.street}
              <br />
              {props.city}, {props.state_code} {props.zip}
            </CardText>
          </div>
          <div className="wrapper">
            <a className="Card-Button" href={props.realtorLink}>
              View on Realtor.com
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;

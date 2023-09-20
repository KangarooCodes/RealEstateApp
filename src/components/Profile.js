import React from "react";
import "../assets/css/Profile.css";
import Img from "../assets/images/profile.png";

const AdminSupport = () => {
  return (
    <div>
      <main className="form-signin profile">
        <h1 className="h3">Username Here</h1>
        <img id="profile-image" alt="user-image" src={Img}></img>
      </main>
    </div>
  );
};

export default AdminSupport;

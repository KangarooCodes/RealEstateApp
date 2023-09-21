import React, { useState, useEffect } from "react";
import "../assets/css/Profile.css";
import { useHistory } from "react-router-dom";
import Img from "../assets/images/profile.png";

const Profile = () => {
  const history = useHistory();
  const [username, setUsername] = useState("Your Page!");
  useEffect(() => {
    const user = sessionStorage.getItem("userData");
    setUsername(user.slice(28, -2));
  }, []);
  const signout = () => {
    sessionStorage.clear();
    history.push("/");
    window.location.reload(false);
  };
  return (
    <div>
      <main className="form-signin profile">
        <h1 className="h3">{username}</h1>
        <img id="profile-image" alt="user-image" src={Img}></img>
        <button id="signout" onClick={signout}>
          Sign out
        </button>
      </main>
    </div>
  );
};

export default Profile;

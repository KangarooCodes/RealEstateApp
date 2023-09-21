import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Forms.css";

const Signup = () => {
  const [error, setError] = useState("hidden");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleInputChange = (e) => {
    // console.log("handleInputChange", e.target.name, e.target.value);
    setError("hidden");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("userData", JSON.stringify(data));
          console.log("User Created.");
          history.push("/");
          window.location.reload(false);
        } else {
          console.log("From Client: Session Check failed.");
          setError("visible");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <main className="form-signin register">
        <h1 className="h3">Create Account</h1>
        <form action="" className="form-inputs" onSubmit={handleRegister}>
          <div className="form-floating">
            <input
              type="Email"
              className="form-control"
              id="floatingEmail"
              name="email"
              placeholder="Email"
              autoComplete="Email"
              required=""
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="floatingUsername"
              name="username"
              placeholder="Username"
              autoComplete="Username"
              required=""
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              autoComplete="off"
              required=""
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <button className="w-100 btn btn-lg" type="submit">
            Create and Login
          </button>
        </form>
      </main>
      <div id="form-error2" style={{ visibility: error }}>
        Please Try Again
      </div>
    </div>
  );
};
export default Signup;

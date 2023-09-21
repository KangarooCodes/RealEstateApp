import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Forms.css";

const Login = () => {
  const [error, setError] = useState("hidden");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const handleInputChange = (e) => {
    // console.log("name:", e.target.name, e.target.value);
    setError("hidden");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          sessionStorage.setItem("userData", JSON.stringify(data));
          console.log("User data stored in session.");
          history.push("/");
          window.location.reload(false);
        } else {
          console.log("From Client: Session Check failed.");
          setError("visible");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
      <main className="form-signin login">
        <h1 className="h3">Login</h1>

        <form
          action=""
          className="form-inputs"
          onSubmit={handleLoginSubmit}
        >
          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              name="username"
              placeholder="Username"
              autoComplete="username"
              required=""
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
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {/* <div className="checkbox mb-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                name="remember_me"
                id="rememberMeSwitch"
                onChange={handleInputChange}
              />
              <label
                className="form-check-label"
                htmlFor="rememberMeSwitch"
              >
                {" "}
                Remember me
              </label>
            </div>
          </div> */}
          <br />
          <button className="w-100 btn btn-lg" type="submit">
            Sign in
          </button>
        </form>
      </main>
      <div id="form-error2" style={{ visibility: error }}>
        Please Try Again
      </div>
    </div>
  );
};

export default Login;

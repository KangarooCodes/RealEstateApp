import React from "react";
import "../assets/css/Forms.css";

const Login = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/login", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data = ", data);
      })
      .catch((error) => console.log(error));
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
              type="Email"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
              autoComplete="Email"
              required=""
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              autoComplete="off"
              required=""
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
    </div>
  );
};

export default Login;

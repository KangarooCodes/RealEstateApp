import React from "react";
import "../assets/css/Forms.css";

const Signup = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data = ", data);
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
              placeholder="Email"
              autoComplete="Email"
              required=""
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="username"
              className="form-control"
              id="floatingUsername"
              placeholder="Username"
              autoComplete="Username"
              required=""
            />
            <label htmlFor="floatingInput">Username</label>
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
          <br />
          <button className="w-100 btn btn-lg" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
export default Signup;

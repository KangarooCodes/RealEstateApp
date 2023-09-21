import React, { useState } from "react";
import "../assets/css/Forms.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    // console.log("handleInputChange", e.target.name, e.target.value);
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
        console.log(data);
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
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
export default Signup;

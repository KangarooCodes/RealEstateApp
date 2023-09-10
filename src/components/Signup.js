import React from "react";
import "../assets/css/Forms.css";

const Signup = () => {
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    /// Account Creation To Be Completed Here
  };
  return (
    <div>
      <main class="form-signin">
        <h1 class="h3">Create Account</h1>
        <form
          action=""
          className="form-inputs"
          onSubmit={handleCreateSubmit}
        >
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="email"
              required=""
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              autoComplete="off"
              required=""
            />
            <label for="floatingPassword">Password</label>
          </div>
          <br />
          <button class="w-100 btn btn-lg" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
export default Signup;

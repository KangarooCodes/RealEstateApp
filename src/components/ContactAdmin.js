import React from "react";

const AdminSupport = () => {
  return (
    <div>
      <main className="form-signin">
        <h1 className="h3">Contact Admin</h1>

        <form action="" className="form-inputs">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="email"
              required=""
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="message"
              className="form-control"
              id="floatingPassword"
              placeholder="Message"
              autoComplete="off"
              required=""
            />
            <label htmlFor="floatingPassword">Message</label>
          </div>
          <br />
          <button className="w-100 btn btn-lg" type="submit">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminSupport;

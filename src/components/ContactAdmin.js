import React from "react";

const AdminSupport = () => {
  return (
    <div>
      <main class="form-signin">
        <h1 class="h3">Contact Admin</h1>

        <form action="" className="form-inputs">
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
              type="message"
              class="form-control"
              id="floatingPassword"
              placeholder="Message"
              autoComplete="off"
              required=""
            />
            <label for="floatingPassword">Message</label>
          </div>
          <br />
          <button class="w-100 btn btn-lg" type="submit">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminSupport;

import "../assets/css/App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Support from "./ContactAdmin";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
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
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/support" component={Support} />
          <Redirect to="/" />
        </Switch>
      </header>
    </div>
  );
}

export default App;

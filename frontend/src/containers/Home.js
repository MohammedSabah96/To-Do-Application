import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <div class="jumbotron mt-5">
      <h1 class="display-4">Welcome to ToDo Application!</h1>
      <p class="lead">This ToDo has an authentication system.</p>
      <hr class="my-4" />
      <p>Click the Log In button</p>
      <Link class="btn btn-primary btn-lg" to="/login" role="button">
        Login
      </Link>
    </div>
  </div>
);

export default Home;

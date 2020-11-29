import React from "react";

import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux dwadawdawdawdaw</p>
    <Link className="btn btn-primary btn-lg" to="about">
      Learn more
    </Link>
  </div>
);

export default HomePage;

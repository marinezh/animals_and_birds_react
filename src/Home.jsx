import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className="flex">
      <Link to="/animals">
        <div className="animals_card">
          <h4>Animals</h4>
        </div>
      </Link>
      <Link to="/birds">
        <div className="birds_card">
          <h4>Birds</h4>
        </div>
      </Link>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const pages = () => {
  return (
    <div>
      <h1>PLAN FOR THE WEEK I HAVE EXCECUTED</h1>
      <ul>
        <li>
          <Link to="/">REDUX </Link>
        </li>
        <li>
          <Link to="/view">VIEW</Link>
        </li>
        <li>
          <Link to="/edit">Edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default pages;

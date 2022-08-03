import React from "react";
import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <h1>PLAN FOR THE WEEK I HAVE EXCECUTED</h1>
      <ul style={{listStyle:'circle'}}>
        <li>
          <Link to="/">REDUX </Link>
        </li>
        <li>
          <Link to="/add">REDUXadd </Link>
        </li>
        <li>
          <Link to="/view">VIEW</Link>
        </li>
        <li>
          <Link to="/counter">toolkit counter</Link>
        </li>
        <li>
          <Link to="/crud">crud</Link>
        </li>
        <li>
          <Link to="/viewcrud">viewcrud</Link>
        </li>
        <li>
          <Link to="/home">socket io</Link>
        </li>
        <li>
          <Link to="/:roomId">socket io</Link>
        </li>
        <li>
          <Link to="/test">counter app</Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;

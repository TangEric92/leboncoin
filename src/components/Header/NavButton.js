import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function NavButton(props) {
  const { path, name } = props;
  return (
    <div className="navButton">
      <Link to={path}>{name.toUpperCase()}</Link>
    </div>
  );
}

export default NavButton;

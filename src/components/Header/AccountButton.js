import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function AccountButton(props) {
  const { path, name } = props;
  return (
    <div className="accountButton">
      <Link to={path}>{name}</Link>
    </div>
  );
}

export default AccountButton;

import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

//const server = "https://livredor-api.herokuapp.com";
//const server = "http://localhost:3001";

function Login(props) {
  const server = window.$server;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };
  console.log(server);
  console.log(token);
  if (token === null) {
    // si le token est null on affiche un bouton de login
    return (
      <div>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          onClick={async () => {
            // on appelle la route /login et on garde le token dans le state
            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/user/log_in",
              {
                email: email,
                password: password
              }
            );

            const token = response.data.token;
            // on garde le token dans un cookie
            Cookies.set("token", token);
            setToken(token);
          }}
        >
          Login
        </button>
      </div>
    );
  }
  return <Redirect to="/signup" />;
}

export default Login;

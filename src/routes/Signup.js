import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

//const server = "https://livredor-api.herokuapp.com";
//const server = "http://localhost:3001";

const server = "https://leboncoin-api.herokuapp.com/api/user";

function Signup(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [token, setToken] = useState(Cookies.get("token") || null);
  console.log(token);
  const handleUserChange = event => {
    const value = event.target.value;
    setUser(value);
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };
  console.log(server);
  if (token === null) {
    return (
      <p>
        <input
          placeholder="User"
          type="text"
          name="user"
          value={user}
          onChange={handleUserChange}
        />
        <input
          placeholder="eric@lereacteur.fr"
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
              "https://leboncoin-api.herokuapp.com/api/user/sign_up",
              {
                email: "ericeric@lereacteur.io",
                username: user,
                password: password
              }
            );

            console.log(response.data);
            const token = response.data.token;
            // on garde le token dans un cookie
            Cookies.set("token", token);
            setToken(token);
          }}
        >
          S'inscrire
        </button>
      </p>
    );
  }
  return (
    <p>
      Vous étes déja inscrit et connecté , voici votre token {token}, pour vous
      déconnecter :
      <button
        onClick={() => {
          Cookies.remove("token");
          setToken(null);
        }}
      >
        Logout
      </button>
    </p>
  );
}

export default Signup;

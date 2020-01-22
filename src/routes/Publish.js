import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

//const server = "https://livredor-api.herokuapp.com";
//const server = "http://localhost:3001";

function Publish(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleTitleChange = event => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDescriptionChange = event => {
    const value = event.target.value;
    setDescription(value);
  };
  const handlePriceChange = event => {
    const value = event.target.value;
    setPrice(value);
  };

  console.log(token);
  if (token !== null) {
    // si le token est null on affiche un bouton de login
    return (
      <div>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          placeholder="Price"
          type="text"
          name="price"
          value={price}
          onChange={handlePriceChange}
        />
        <button
          onClick={async () => {
            // on appelle la route /login et on garde le token dans le state
            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/offer/publish",
              {
                title: title,
                description: description,
                price: price
              },
              {
                headers: {
                  authorization: "Bearer " + token
                }
              }
            );
          }}
        >
          Login
        </button>
      </div>
    );
  }
  return <Redirect to="/signup" />;
}

export default Publish;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Annonce from "../components/Annonce";
import axios from "axios";
function Offer(props) {
  const { id } = useParams();

  let link = "https://leboncoin-api.herokuapp.com/api/offer/" + id;
  const [annonce, setAnnonce] = useState({});
  const fetchAnnonce = () => {
    axios
      .get(link)
      .then(response => {
        setAnnonce(response.data);
      })

      .catch(err => {
        console.log(err);
      });
  };
  console.log(annonce);
  useEffect(() => {
    fetchAnnonce();
  }, []);

  return (
    <div className="offer">
      <div className="title">{annonce.title}</div>
      <div className="price">{annonce.price}</div>
      <div className="description">{annonce.description}</div>
    </div>
  );
}

export default Offer;

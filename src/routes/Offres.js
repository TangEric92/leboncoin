import React, { useState, useEffect } from "react";
import Annonce from "../components/Annonce";
import axios from "axios";
function Offres() {
  const [annonces, setAnnonces] = useState([]);
  const fetchAnnonces = () => {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count")
      .then(response => {
        setAnnonces(response.data.offers);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAnnonces();
  }, []);

  return (
    <div className="offres">
      {annonces.map((annonce, index) => {
        return (
          <Annonce
            title={annonce.title}
            price={annonce.price}
            id={annonce._id}
          />
        );
      })}
    </div>
  );
}

export default Offres;

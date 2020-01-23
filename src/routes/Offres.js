import React, { useState, useEffect } from "react";
import Annonce from "../components/Annonce";
import axios from "axios";
function Offres() {
  const [annonces, setAnnonces] = useState([]);
  //skip = page * limit
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  const limit = 25;

  const skip = page * limit;
  let count = 0;
  let res = null;
  const fetchAnnonces = () => {
    axios
      .get(
        `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip}&limit=${limit}`
      )
      .then(response => {
        setData(response.data);

        setAnnonces(response.data.offers);

        count = response.data.count / 25;
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAnnonces();
  }, [page]);

  const setNewPage = nbr => {
    setPage(nbr);
  };
  const generatePagination = () => {
    const elem = [];
    for (let i = 0; i < data.count / limit; i++) {
      elem.push(
        <button onClick={() => setNewPage(i)} key={i}>
          {i}
        </button>
      );
    }
    return elem;
  };

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
      {data && generatePagination()}
    </div>
  );
}

export default Offres;

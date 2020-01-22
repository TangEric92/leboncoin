import React from "react";

function Annonce(props) {
  const { title, price, id } = props;
  let link = "/offer/" + id;
  return (
    <div className="annonce">
      <div className="rightAnnonce">
        <img src="../images/default.png" />
      </div>
      <div className="leftAnnonce">
        <a href={link}>ok</a>
        <div className="annonceTitle">{title}</div>
        <div className="annoncePrice">{price ? price + " €" : price}</div>
      </div>
    </div>
  );
}

export default Annonce;

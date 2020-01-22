import React from "react";
import NavButton from "./NavButton";
import AccountButton from "./AccountButton";

function Header() {
  return (
    <div className="header">
      <div>
        <a href="/">leboncoin</a>
      </div>
      <nav className="navButtons">
        <NavButton path="/offres" name="Offres" />
        <NavButton path="/publish" name="Déposer une annonce" />
      </nav>
      <div className="accountButtons">
        <AccountButton path="/signup" name="Créer un compte" />
        <AccountButton path="/login" name="Se connecter" />
      </div>
    </div>
  );
}

export default Header;

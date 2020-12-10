import React from "react";
import Search from "../components/Search";
import "../styles/style.css";

import flagPol from "../flags/pol.png";
import flagEng from "../flags/eng.png";
import flagGer from "../flags/ger.png";
import flagNed from "../flags/ned.png";
import flagSpa from "../flags/spa.png";
import flagFra from "../flags/fra.png";
import flagIta from "../flags/ita.png";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Search />
      <div className="main__logo">
        MULTI<span className="span">WORDS</span>
      </div>
      <Card>
        <ul className="main__lang-desc">
          <li className="lang-color-pol">
            {" "}
            <img src={flagPol} className="flag" alt="Pol" />
            Ucz sie Polskiego
          </li>
          <li className="lang-color-eng">
            {" "}
            <img src={flagEng} className="flag" alt="Eng" />
            Learn English
          </li>
          <li className="lang-color-ger">
            {" "}
            <img src={flagGer} className="flag" alt="Ger" />
            Lerne Deutch
          </li>
          <li className="lang-color-ned">
            {" "}
            <img src={flagNed} className="flag" alt="Ned" />
            Leer Nederlands
          </li>
          <li className="lang-color-spa">
            {" "}
            <img src={flagSpa} className="flag" alt="Spa" />
            Aprende Espanol
          </li>
          <li className="lang-color-fra">
            {" "}
            <img src={flagFra} className="flag" alt="Fra" />
            Apprenez le france
          </li>
          <li className="lang-color-ita">
            {" "}
            <img src={flagIta} className="flag" alt="Ita" />
            Impara italiano
          </li>
        </ul>
        </Card>
    </>
  );
};

export default Home;

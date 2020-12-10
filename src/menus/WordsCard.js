import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Card from "../components/Card";
import { categories, datas } from "../data/categories";
import "../styles/style.css";
import { GlobalContext } from "../context";

import flagPol from "../flags/pol.png";
import flagEng from "../flags/eng.png";
import flagGer from "../flags/ger.png";
import flagNed from "../flags/ned.png";
import flagSpa from "../flags/spa.png";
import flagFra from "../flags/fra.png";
import flagIta from "../flags/ita.png";


const WordsCard = props => {

  console.log(props);
  console.log("cat", props.match.params.cat);

  const level = props.match.params.lvl;
  const catName = props.match.params.cat;
  //const [words, setWords] = useState([]);
  const [item, setItem] = useState(0);
  const wordsArr = [];

  const prevWords = () => {
    if (item === 0) {
      setItem(0);
    } else {
      setItem(item - 1);
    }
  };

  const nextWords = () => {
    if (item === wordsArr.length - 1) {
      setItem(wordsArr.length - 1);
    } else {
      setItem(item + 1);
    }
  };

  const wordsData = datas.map(word => {
    if (catName === word.cat) {
      console.log(word.cat);
      wordsArr.push([
        word.id,
        word.pol,
        word.eng,
        word.ger,
        word.ned,
        word.spa,
        word.fra,
        word.ita
      ]);
      console.log("Array", wordsArr);
    }
  });
  console.log("wordsArray after map", wordsArr);

  return (
    <>
      <Search />
      <Card>
        <ul
          className="main__lang-desc"
          // style={{ flexDirection: "column", flexWrap: "wrap" }}
        >
          <li className="lang-color-pol word__list">
            <img src={flagPol} className="flag" alt="Pol" /> {wordsArr[item][1]}
          </li>

          <li className="lang-color-eng word__list">
            <img src={flagEng} className="flag" alt="Eng" /> {wordsArr[item][2]}
          </li>

          <li className="lang-color-ger word__list">
            <img src={flagGer} className="flag" alt="Ger" /> {wordsArr[item][3]}
          </li>

          <li className="lang-color-ned word__list">
            <img src={flagNed} className="flag" alt="Ned" /> {wordsArr[item][4]}
          </li>

          <li className="lang-color-spa word__list">
            <img src={flagSpa} className="flag" alt="Spa" /> {wordsArr[item][5]}
          </li>

          <li className="lang-color-fra word__list">
            <img src={flagFra} className="flag" alt="Fra" /> {wordsArr[item][6]}
          </li>

          <li className="lang-color-ita word__list">
            <img src={flagIta} className="flag" alt="Ita" /> {wordsArr[item][7]}
          </li>
        </ul>
        <div className="word__card-slide">
          <button className="button prev" onClick={prevWords}>
            {item <= 0 ? (
              <Link to={`/words/${level}`}>
                <span>Back</span>
              </Link>
            ) : (
              <span> Prev </span>
            )}
          </button>
          {`${item + 1} / ${wordsArr.length}`}
          <button className="button next" onClick={nextWords}>
            {item >= wordsArr.length - 1 ? (
              <Link to={`/words/${level}`}>
                <span>Back</span>
              </Link>
            ) : (
              <span> Next </span>
            )}
          </button>
        </div>
        </Card>
    </>
  );
};

export default WordsCard;

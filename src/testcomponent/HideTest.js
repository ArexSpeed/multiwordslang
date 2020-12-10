import React, { useState } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";
import WordCard from "../menus/WordsCard";

import flagPol from "../flags/pol.png";
import flagEng from "../flags/eng.png";
import flagGer from "../flags/ger.png";
import flagNed from "../flags/ned.png";
import flagSpa from "../flags/spa.png";
import flagFra from "../flags/fra.png";
import flagIta from "../flags/ita.png";
import Card from "../components/Card";

const HideTest = props => {
  const [openWord, setOpenWord] = useState({
    pol: false,
    eng: false,
    ger: false,
    ned: false,
    spa: false,
    fra: false,
    ita: false
  });
  console.log("start props", props);
  const selects = props.location.state.selects;
  console.log(selects);

  const level = selects[0];
  const catName = selects[1];

  const [item, setItem] = useState(0);
  const wordsArr = [];

  const prevWords = () => {
    if (item === 0) {
      setItem(0);
    } else {
      setItem(item - 1);
    }
    setOpenWord(!openWord);
  };

  const nextWords = () => {
    if (item === wordsArr.length - 1) {
      setItem(wordsArr.length - 1);
    } else {
      setItem(item + 1);
    }
    setOpenWord(!openWord); //is enough to false all
  };

  const wordsData = datas.map(word => {
    if (catName === word.cat) {
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
    }
  });

  //set true openWord when was clicking on button Show (in Next, Prev is adding change again to false )
  const showWord = e => {
    console.log(e.target.value);
    let value = e.target.value;
    console.log("value", value);
    setOpenWord({ ...openWord, [value]: true });
    // if (value === "pol") setOpenWord({ ...openWord, pol: true });
    // if (value === "eng") setOpenWord({ ...openWord, eng: true });
    // if (value === "ger") setOpenWord({ ...openWord, ger: true });
    // if (value === "ned") setOpenWord({ ...openWord, ned: true });
    // if (value === "spa") setOpenWord({ ...openWord, spa: true });
    // if (value === "fra") setOpenWord({ ...openWord, fra: true });
    // if (value === "ita") setOpenWord({ ...openWord, ita: true });
  };

  return (
    <>
      <Search />

      <Card>
        <ul
          className="main__lang-desc"
          // style={{ flexDirection: "column", flexWrap: "wrap" }}
        >
          <li className="lang-color-pol word__list">
            <img src={flagPol} className="flag" alt="Pol" />{" "}
            {openWord.pol ? (
              wordsArr[item][1]
            ) : (
              <button
                className="button btn-lang-color-pol"
                onClick={showWord}
                value="pol"
              >
                Pokaż
              </button>
            )}
          </li>

          <li className="lang-color-eng word__list">
            <img src={flagEng} className="flag" alt="Eng" />{" "}
            {openWord.eng ? (
              wordsArr[item][2]
            ) : (
              <button
                className="button btn-lang-color-eng"
                onClick={showWord}
                value="eng"
              >
                Show
              </button>
            )}
          </li>

          <li className="lang-color-ger word__list">
            <img src={flagGer} className="flag" alt="Ger" />{" "}
            {openWord.ger ? (
              wordsArr[item][3]
            ) : (
              <button
                className="button btn-lang-color-ger"
                onClick={showWord}
                value="ger"
              >
                Ziegen
              </button>
            )}
          </li>

          <li className="lang-color-ned word__list">
            <img src={flagNed} className="flag" alt="Ned" />{" "}
            {openWord.ned ? (
              wordsArr[item][4]
            ) : (
              <button
                className="button btn-lang-color-ned"
                onClick={showWord}
                value="ned"
              >
                Laten zien
              </button>
            )}
          </li>

          <li className="lang-color-spa word__list">
            <img src={flagSpa} className="flag" alt="Spa" />{" "}
            {openWord.spa ? (
              wordsArr[item][5]
            ) : (
              <button
                className="button btn-lang-color-spa"
                onClick={showWord}
                value="spa"
              >
                Mostrar
              </button>
            )}
          </li>

          <li className="lang-color-fra word__list">
            <img src={flagFra} className="flag" alt="Fra" />{" "}
            {openWord.fra ? (
              wordsArr[item][6]
            ) : (
              <button
                className="button btn-lang-color-fra"
                onClick={showWord}
                value="fra"
              >
                Montrer
              </button>
            )}
          </li>

          <li className="lang-color-ita word__list">
            <img src={flagIta} className="flag" alt="Ita" />{" "}
            {openWord.ita ? (
              wordsArr[item][7]
            ) : (
              <button
                className="button btn-lang-color-ita"
                onClick={showWord}
                value="ita"
              >
                Mostrare
              </button>
            )}
          </li>
        </ul>
        <div className="word__card-slide">
          <button className="button prev" onClick={prevWords}>
            {item <= 0 ? (
              <Link to={`/test/hide`}>
                <span>Back</span>
              </Link>
            ) : (
              <span> Prev </span>
            )}
          </button>
          {`${item + 1} / ${wordsArr.length}`}
          <button className="button next" onClick={nextWords}>
            {item >= wordsArr.length - 1 ? (
              <Link to={`/test/hide`}>
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

export default HideTest;

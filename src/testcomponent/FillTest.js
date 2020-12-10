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

const FillTest = props => {
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
    setValueForBtnCheck([]);
    setBtnCheck(!btnCheck);
  };

  const nextWords = () => {
    if (item === wordsArr.length - 1) {
      setItem(wordsArr.length - 1);
    } else {
      setItem(item + 1);
    }
    setOpenWord(!openWord); //is enough to false all
    setValueForBtnCheck([]); //zerowanie + i -
    setBtnCheck(!btnCheck);
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
  const [btnCheck, setBtnCheck] = useState({
    pol: false,
    eng: false,
    ger: false,
    ned: false,
    spa: false,
    fra: false,
    ita: false
  });
  const [valueForBtnCheck, setValueForBtnCheck] = useState([]);
  const showWord = e => {
    let valueLang = e.target.value;
    //console.log("value", value);
    //get value from filled input
    const inputLangValue = document.querySelector(`#input-${valueLang}`).value;

    let index = 0; //index dla sprawdzenia konkretnego słowka z jezyka
    if (valueLang === "pol") index = 1;
    if (valueLang === "eng") index = 2;
    if (valueLang === "ger") index = 3;
    if (valueLang === "ned") index = 4;
    if (valueLang === "spa") index = 5;
    if (valueLang === "fra") index = 6;
    if (valueLang === "ita") index = 7;

    console.log("index", index);
    if (inputLangValue.toLowerCase() === wordsArr[item][index].toLowerCase()) {
      setBtnCheck({ ...btnCheck, [valueLang]: true });
    }
    if (inputLangValue.toLowerCase() === "") {
      setBtnCheck({ ...btnCheck, [valueLang]: "empty" });
    }
    setOpenWord({ ...openWord, [valueLang]: true });
    setValueForBtnCheck([...valueForBtnCheck, valueLang]);
    console.log("btnCheck", btnCheck);
    console.log("valueBtn", valueForBtnCheck);
  };

  ///////
  ///////sprawdzic czy dany jezyk byl juz odsloniety (jezyki osobno)
  const btnCheckPol = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "pol" && btnCheck.pol)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "pol" && btnCheck.pol === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "pol" && !btnCheck.pol)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
    //sam return {correctBtn} zwracał puste buttony
  });

  const btnCheckEng = valueForBtnCheck.map(item => {
    //item === "eng" && btnCheck.eng ? <button>OK</button> : <button>NO</button> - pojedynczy zwarca tyle buttonow ile sie razy kliknie na przycisk
    let correctBtn;
    if (item === "eng" && btnCheck.eng)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "eng" && btnCheck.eng === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "eng" && !btnCheck.eng)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  const btnCheckGer = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "ger" && btnCheck.ger)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "ger" && btnCheck.ger === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "ger" && !btnCheck.ger)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  const btnCheckNed = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "ned" && btnCheck.ned)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "ned" && btnCheck.ned === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "ned" && !btnCheck.ned)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  const btnCheckSpa = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "spa" && btnCheck.spa)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "spa" && btnCheck.spa === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "spa" && !btnCheck.spa)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  const btnCheckFra = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "fra" && btnCheck.fra)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "fra" && btnCheck.fra === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "fra" && !btnCheck.fra)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  const btnCheckIta = valueForBtnCheck.map(item => {
    let correctBtn;
    if (item === "ita" && btnCheck.ita)
      correctBtn = <button className="correctBtn-good">+</button>;
    if (item === "ita" && btnCheck.ita === "empty")
      correctBtn = <button className="correctBtn-show"></button>;
    if (item === "ita" && !btnCheck.ita)
      correctBtn = <button className="correctBtn-wrong">-</button>;

    return correctBtn ? <span>{correctBtn}</span> : "";
  });

  return (
    <main className="main">
      <Search />

      <div className="word__card">
        <ul
          className="main__lang-desc"
          // style={{ flexDirection: "column", flexWrap: "wrap" }}
        >
          <li className="lang-color-pol word__list">
            <img src={flagPol} className="flag" alt="Pol" />{" "}
            {openWord.pol ? (
              <>
                <span>{wordsArr[item][1]}</span> <span>{btnCheckPol}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-pol"
                  className="input__filltest input-lang-color-pol"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-pol"
                  onClick={showWord}
                  value="pol"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-eng word__list">
            <img src={flagEng} className="flag" alt="Eng" />{" "}
            {openWord.eng ? (
              <>
                <span>{wordsArr[item][2]}</span> <span>{btnCheckEng}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-eng"
                  className="input__filltest input-lang-color-eng"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-eng"
                  onClick={showWord}
                  value="eng"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-ger word__list">
            <img src={flagGer} className="flag" alt="Ger" />{" "}
            {openWord.ger ? (
              <>
                <span>{wordsArr[item][3]}</span> <span>{btnCheckGer}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-ger"
                  className="input__filltest input-lang-color-ger"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-ger"
                  onClick={showWord}
                  value="ger"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-ned word__list">
            <img src={flagNed} className="flag" alt="Ned" />{" "}
            {openWord.ned ? (
              <>
                <span>{wordsArr[item][4]}</span> <span>{btnCheckNed}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-ned"
                  className="input__filltest input-lang-color-ned"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-ned"
                  onClick={showWord}
                  value="ned"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-spa word__list">
            <img src={flagSpa} className="flag" alt="Spa" />{" "}
            {openWord.spa ? (
              <>
                <span>{wordsArr[item][5]}</span> <span>{btnCheckSpa}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-spa"
                  className="input__filltest input-lang-color-spa"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-spa"
                  onClick={showWord}
                  value="spa"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-fra word__list">
            <img src={flagFra} className="flag" alt="Fra" />{" "}
            {openWord.fra ? (
              <>
                <span>{wordsArr[item][6]}</span> <span>{btnCheckFra}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-fra"
                  className="input__filltest input-lang-color-fra"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-fra"
                  onClick={showWord}
                  value="fra"
                >
                  OK
                </button>
              </>
            )}
          </li>

          <li className="lang-color-ita word__list">
            <img src={flagIta} className="flag" alt="Ita" />{" "}
            {openWord.ita ? (
              <>
                <span>{wordsArr[item][7]}</span> <span>{btnCheckIta}</span>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name=""
                  id="input-ita"
                  className="input__filltest input-lang-color-ita"
                  placeholder="Wpisz słowo lub kliknij OK"
                />
                <button
                  className="button__filltest btn-lang-color-ita"
                  onClick={showWord}
                  value="ita"
                >
                  OK
                </button>
              </>
            )}
          </li>
        </ul>
        <div className="word__card-slide">
          <button className="button prev" onClick={prevWords}>
            {item <= 0 ? (
              <Link to={`/test/fill`}>
                <span>Back</span>
              </Link>
            ) : (
              <span> Prev </span>
            )}
          </button>
          {`${item + 1} / ${wordsArr.length}`}
          <button className="button next" onClick={nextWords}>
            {item >= wordsArr.length - 1 ? (
              <Link to={`/test/fill}`}>
                <span>Back</span>
              </Link>
            ) : (
              <span> Next </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default FillTest;

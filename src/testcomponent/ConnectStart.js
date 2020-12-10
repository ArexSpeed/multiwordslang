import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const ConnectStart = props => {
  console.log(props.location.state.selects);
  const level = props.location.state.selects[0];
  const category = props.location.state.selects[1];
  const langs = props.location.state.selects[2];

  let wordsArr = []; //tablica ktora zbiera wszystkie wybrane slowa
  const wordData = datas.map(word => {
    if (level === word.lvl && category === word.cat) {
      for (let i = 0; i < langs.length; i++) {
        if (langs[i] === "polski")
          wordsArr.push({ id: word.id, name: word.pol, lang: "pol" });
        if (langs[i] === "english")
          wordsArr.push({ id: word.id, name: word.eng, lang: "eng" });
        if (langs[i] === "deutsch")
          wordsArr.push({ id: word.id, name: word.ger, lang: "ger" });
        if (langs[i] === "nederlande")
          wordsArr.push({ id: word.id, name: word.ned, lang: "ned" });
        if (langs[i] === "español")
          wordsArr.push({ id: word.id, name: word.spa, lang: "spa" });
        if (langs[i] === "français")
          wordsArr.push({ id: word.id, name: word.fra, lang: "fra" });
        if (langs[i] === "italiano")
          wordsArr.push({ id: word.id, name: word.ita, lang: "ita" });
      }
    }
    //console.log(wordsArr);
  });

  //Tablice do sprawdzania checkConnect
  let checkedWords = [];
  let checkedWordsBtn = [];
  let checkedWordsBtnId = [];
  const checkConnect = e => {
    const checkedWordText = e.target.innerText; //pobranie tekstu z btn
    const checkedWord = e.target; //pobranie calego btn
    const checkedWordValue = e.target.value; //pobranie wartosci/id btn

    checkedWord.classList.add("checked");
    checkedWordsBtn.push({ id: checkedWordValue, btn: checkedWord });
    console.log(e.target.className);
    console.log(checkedWordsBtn);
    checkedWords.push(checkedWordText);
    if (checkedWords.length >= langs.length) {
      //sparwdzenie jezeli dlugosc wybranych jest rowna ilosci jezykow
      checkedWordsBtn.map(item => checkedWordsBtnId.push(item.id)); //dodanie id do osobnej tablicy
      console.log("ids", checkedWordsBtnId);
      const checkIDs = checkedWordsBtnId.every((val, i, arr) => val === arr[0]); //sprawdzenie czy wszystkie id sa rowne musi byc z constem bo przy zwyklym console log w ? : zawsze zwracało true
      console.log(checkIDs);
      if (checkIDs) {
        checkedWordsBtn.map(item => {
          item.btn.classList.remove("checked");
          item.btn.classList.add("correct");
          item.btn.disabled = true;
          setTimeout(() => {
            item.btn.style.visibility = "hidden";
          }, 500);
        });
      } else {
        checkedWordsBtn.map(item => {
          item.btn.classList.remove("checked");
          item.btn.classList.add("wrong");
          item.btn.disabled = false;
          setTimeout(() => {
            item.btn.classList.remove("wrong");
          }, 500);
        });
      }

      setTimeout(() => {
        checkedWordsBtn = []; //wyczyszczenie wszystkich tablic
        checkedWords = [];
        checkedWordsBtnId = [];
      }, 501);
    }
  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  shuffle(wordsArr);
  const showWord = wordsArr.map(word => (
    <button
      className={`button button__connect btn-lang-color-${word.lang}`}
      onClick={checkConnect}
      value={word.id}
    >
      {word.name}{" "}
    </button>
  ));

  const showLangs = langs.map(lang => <span> {lang} </span>);
  return (
    <main className="main">
      <Search />

      <div className="playground">{showWord}</div>
    </main>
  );
};

export default ConnectStart;

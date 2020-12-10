import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import Search from "../components/Search";
import MemoStart from "../components/MemoStart";
import { categories, datas } from "../data/categories";
import "../styles/style.css";
import Card from "../components/Card";

const Memo = props => {
  const [categorie, setCategorie] = useState([]);
  const [secondLangs, setSecondLangs] = useState([]);
  const levels = [{ id: "All" }, { id: 1 }, { id: 2 }, { id: 3 }].map(level => (
    <option key={level.id}>{level.id}</option>
  ));

  let catArr = ["All"];
  const showCategories = e => {
    let chosenLvl = e.target.value;
    catArr = ["All"];
    const categorien = categories.map(category => {
      if (category.lvl === chosenLvl) {
        catArr.push(category.name);
        setCategorie(catArr);
      }
    });
    console.log(categorie);
  };

  const showCat = categorie.map(cat => <option>{cat}</option>);

  const wordsQtys = [4, 6, 10, 14, "All"];
  const showWordsQty = wordsQtys.map(qty => <option>{qty}</option>);

  const langs = [
    "polski",
    "english",
    "deutsch",
    "nederlande",
    "español",
    "français",
    "italiano"
  ];
  const showFirstLang = langs.map(lang => (
    <option value={lang.substr(0, 3)}>{lang}</option>
  ));

  const setNextLang = e => {
    const selectedLang = e.target.value;
    const secLangs = langs;
    for (let i = 0; i < secLangs.length; i++) {
      if (secLangs[i] === selectedLang) {
        secLangs.splice(i, 1);
      }
    }
    setSecondLangs(secLangs);
  };

  const showSecondLangs = secondLangs.map(item => (
    <option value={item.substr(0, 3)}>{item}</option>
  ));

  const show = (
    <>
      <div className="form-group">
        Level:
        <select onChange={showCategories} id="selectId">
          {levels}
        </select>
      </div>
      <div className="form-group">
        Category:
        <select id="selectCat">{showCat}</select>
      </div>
      <div className="form-group">
        Words Qty:
        <select id="selectWordsQty">{showWordsQty}</select>
      </div>
      <div className="form-group">
        1 Language:
        <select id="selectLang1" onChange={setNextLang}>
          {showFirstLang}
        </select>
      </div>
      <div className="form-group">
        2 Language:
        <select id="selectLang2">{showSecondLangs}</select>
      </div>
    </>
  );

  //send values to MemoStart
  let selects = [];
  const startMemo = () => {
    const selectId = document.getElementById("selectId").value;
    const selectCat = document.getElementById("selectCat").value;
    const selectWordsQty = document.getElementById("selectWordsQty").value;
    const selectLang1 = document.getElementById("selectLang1").value;
    const selectLang2 = document.getElementById("selectLang2").value;
    selects.push(selectId, selectCat, selectWordsQty, selectLang1, selectLang2);
    console.log("selectsArr", selects);
    return selects;
  };

  const propsToMemoStart = () => {
    startMemo();
    props.history.push({
      pathname: "/memo/start",
      state: { selects }
    });
  };

  return (
    <>
      <Search />
      <Card>
      <span className="word__card-title">Choose category: </span>
        <ul className="main__lang-desc">{show}</ul>

        <button className="button next" onClick={propsToMemoStart}>
          <span>Start</span>
        </button>
      </Card>
    </>
  );
};

export default withRouter(Memo);

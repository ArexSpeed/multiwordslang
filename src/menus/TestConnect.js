import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "../components/Card";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const TestConnect = props => {
  console.log(props);
  const game = props.match.params.name;
  console.log(game);

  const [categorie, setCategorie] = useState([]);
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

  const langs = [
    "polski",
    "english",
    "deutsch",
    "nederlande",
    "español",
    "français",
    "italiano"
  ];

  //dodanie/wybor jezyka, zmiana koloru ptzy wyborze
  let langChosen = [];
  const addLang = e => {
    console.log(e.target);
    e.target.classList.toggle("checked");
    const langValue = e.target.innerText;
    console.log(langValue);
    langChosen.push(langValue);
    if (langChosen.length > 1) {
      langChosen.sort();
      for (let i = 0; i < langChosen.length; i++) {
        if (langChosen[i] === langChosen[i + 1]) {
          langChosen.splice(i, 2);
        }
      }
    }
    //console.log(langChosen);
  };

  const showLang = langs.map(lang => (
    <button className="btn-lang-check" onClick={addLang}>
      {lang}
    </button>
  ));

  const show = (
    <>
      <div className="form-group">
        Level:
        <select id="selectId" onChange={showCategories}>
          {levels}
        </select>
      </div>
      <div className="form-group">
        Category:
        <select id="selectCat">{showCat}</select>
      </div>
      <div className="form-group">
        Languages:
        <br />
        <div className="lang-checkboxes"> {showLang}</div>
      </div>
    </>
  );

  //send values to MemoStart
  let selects = [];
  const startTest = () => {
    const selectId = document.getElementById("selectId").value;
    const selectCat = document.getElementById("selectCat").value;
    const selectLang = [...langChosen];

    selects.push(selectId, selectCat, selectLang);
    //console.log("selectsArr", selects);
    console.log("selects:", selects);
    return selects;
  };

  const propsToGameStart = () => {
    startTest();
    props.history.push({
      pathname: "/connectstart",
      state: { selects }
    });
  };
  return (
    <>
      <Search />
      <Card>
      <span className="word__card-title">Choose category: </span>
        <ul className="main__lang-desc">{show}</ul>

        <button className="button prev" onClick={propsToGameStart}>
          Start
        </button>
      </Card>

    </>
  );
};

export default withRouter(TestConnect);

import React, { useState } from "react";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

export const categorySetter = () => {
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
      <div className="form-group">Level: t</div>
      <div className="form-group">
        Category:
        <select id="selectCat">{showCat}</select>
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
};

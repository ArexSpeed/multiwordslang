import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "../components/Card";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const Test = props => {
  console.log(props);
  const game = props.match.params.name;
  console.log(game);

  const [categorie, setCategorie] = useState([]);
  const levels = [{ id: "All" }, { id: 1 }, { id: 2 }, { id: 3 }].map(level => (
    <option key={level.id}>{level.id}</option>
  ));

  let catArr = [];
  const showCategories = e => {
    let chosenLvl = e.target.value;
    catArr = [];
    const categorien = categories.map(category => {
      if (category.lvl === chosenLvl) {
        catArr.push(category.name);
        setCategorie(catArr);
      }
    });
    console.log(categorie);
  };

  const chooseLevel = (
    <div className="form-group">
      <select id="selectLvl" onChange={showCategories}>
        {levels}
      </select>
    </div>
  );

  // const show = (
  //   <>
  //     <div className="form-group">
  //       Level:
  //       <select id="selectId" onChange={showCategories}>
  //         {levels}
  //       </select>
  //     </div>
  //     <div className="form-group">
  //       Category:
  //       <select id="selectCat">{showCat}</select>
  //     </div>
  //   </>
  // );

  //send values to MemoStart
  let selects = [];
  const startTest = e => {
    const selectLvl = document.getElementById("selectLvl").value;
    const selectCat = e.target.value;
    console.log("wybrane", selectLvl, selectCat);

    selects.push(selectLvl, selectCat);
    //console.log("selectsArr", selects);
    console.log("selects:", selects);
    return selects;
  };

  const propsToGameStart = e => {
    startTest(e);
    if (props.location.pathname === "/test/hide") {
      props.history.push({
        pathname: "/hidestart",
        state: { selects }
      });
    }
    if (props.location.pathname === "/test/fill") {
      props.history.push({
        pathname: "/filltest",
        state: { selects }
      });
    }
  };

  //musi byc ponizej propsToGameStart
  const showCat = categorie.map(cat => (
    <button
      className="main__category-choose selectCat"
      value={cat}
      onClick={propsToGameStart}
    >
      {cat}
    </button>
  ));
  return (
    <>
      <Search />
      <Card>
      <span className="word__card-title">Choose Level: {chooseLevel}</span>
        <ul className="main__lang-desc">{showCat}</ul>
      </Card>

    </>
  );
};

export default withRouter(Test);

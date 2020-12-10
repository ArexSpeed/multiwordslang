import React, { useState } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const MemoStart = props => {
  console.log("start props", props);
  const selects = props.location.state.selects;
  const lvl = selects[0];
  const category = selects[1];
  let wordsQty = selects[2];
  if (wordsQty === "All") wordsQty = 30;
  const langOne = selects[3];
  const langTwo = selects[4];
  console.log("lvl", lvl);
  console.log("cat", category);
  console.log("lang1", langOne);
  console.log("lang2", langTwo);
  console.log(selects);
  const langs = [
    "polski",
    "english",
    "deutsch",
    "nederlande",
    "español",
    "français",
    "italiano"
  ];

  let cardsArr = [];
  let cardsArrIds = []; //do przechowywania id po to by móc usunac słowa po sortowaniu jesli wybierze sie np. 6 słów
  let cardsArrFinal = []; //ostateczna wersja po usunieciu wybranych

  //getting words from datas
  const cards = datas.map(data => {
    let lngOne =
      langOne === "pol"
        ? data.pol
        : langOne === "eng"
        ? data.eng
        : langOne === "deu"
        ? data.ger
        : langOne === "ned"
        ? data.ned
        : langOne === "esp"
        ? data.spa
        : langOne === "fra"
        ? data.fra
        : langOne === "ita"
        ? data.ita
        : "";

    let lngTwo =
      langTwo === "pol"
        ? data.pol
        : langTwo === "eng"
        ? data.eng
        : langTwo === "deu"
        ? data.ger
        : langTwo === "ned"
        ? data.ned
        : langTwo === "esp"
        ? data.spa
        : langTwo === "fra"
        ? data.fra
        : langTwo === "ita"
        ? data.ita
        : "";

    //find data with searching lvl and category
    if (data.lvl === lvl && data.cat === category) {
      //pomyslec nad wybieraniem ilosci slow
      cardsArr.push(
        { id: data.id, name: lngOne },
        { id: data.id, name: lngTwo }
      );
      cardsArrIds.push(data.id);
    }
    // console.log("cardsArr", cardsArr);
  });

  let chosenCard = [];
  const flipCard = e => {
    console.log("flipped", e.target.parentNode);
    console.log("class", e.target.parentNode.className);
    console.log("value", e.target.parentNode.getAttribute("value"));
    const flippedCard = e.target.parentNode; //wybrany przycisk z tagiem <div...></div...> parent poniewaz normalnie bieze nizszy div
    const flippedCardValue = e.target.parentNode.getAttribute("value"); //id wybranego
    flippedCard.classList.add("open");

    console.log("fliped 2", e.target.classList);
    chosenCard.push({ id: flippedCardValue, btn: flippedCard });
    console.log("wybrane", chosenCard);

    if (chosenCard.length === 2) {
      chosenCard[0].id === chosenCard[1].id //sprawdzenie rownosci id
        ? chosenCard.map(item => {
            //item.btn.classList.add("correct");
            setTimeout(() => {
              //zmiana po czasie zeby bylo chwile ja widac
              item.btn.classList.add("correctMemo");
              item.btn.style.visibility = "hidden";
              chosenCard = [];
            }, 1000);
          })
        : chosenCard.map(item => {
            item.btn.classList.add("wrongMemo");

            chosenCard = [];
            setTimeout(() => {
              item.btn.classList.remove("wrongMemo");
              item.btn.classList.remove("open");
            }, 1000);
          });
    }
  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  //przygotowanie do wyswietlanie, mieszanie i usuwanie wybranych elementow
  //shuffle(cardsArr); -> niepotrzebne przez usuwanie elementow
  shuffle(cardsArrIds); //posortowac tablice z ids bo usuniete beda tylko ostatnie

  cardsArrIds.splice(wordsQty, cardsArrIds.length);
  // console.log("cardsArr", cardsArr);
  // console.log("splice ids", cardsArrIds);
  cardsArr.map(item => {
    for (let i = 0; i < cardsArrIds.length; i++) {
      if (item.id === cardsArrIds[i])
        cardsArrFinal.push({ id: item.id, name: item.name });
    }
  });
  console.log("finalArr", cardsArrFinal);
  shuffle(cardsArrFinal);
  // cardsArr.splice(wordsQty, cardsArr.length); //suffluje wszystkie bez wzgledu na id i przy splice usuwaja sie nierowno
  const showCards = cardsArrFinal.map((item, index) => (
    <>
      <div className="memo__card card" onClick={flipCard} value={item.id}>
        <span className="cardFront">{index + 1}</span>
        <span className="cardBack">{item.name}</span>
      </div>
    </>
  ));

  return (
    <>
      <Search />

      <div className="memo__cards">{showCards}</div>
    </>
  );
};

export default MemoStart;

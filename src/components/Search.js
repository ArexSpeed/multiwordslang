import React, { useState, useEffect } from "react";
import { datas } from "../data/categories";
import "../styles/style.css";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  let tempSearch = [];
  const handleSearch = e => {
    const found = e.target.value.toLowerCase();
    if (found !== "") {
      for (let i = 0; i < datas.length; i++) {
        if (
          datas[i].pol.toLowerCase().includes(found) ||
          datas[i].eng.toLowerCase().includes(found) ||
          datas[i].ger.toLowerCase().includes(found) ||
          datas[i].ned.toLowerCase().includes(found) ||
          datas[i].spa.toLowerCase().includes(found) ||
          datas[i].fra.toLowerCase().includes(found) ||
          datas[i].ita.toLowerCase().includes(found)
        ) {
          //step 1 -> saving found words to temporary array tempSearch, is not working with {pol: datas.pol}
          tempSearch.push(
            datas[i].pol,
            datas[i].eng,
            datas[i].ger,
            datas[i].ned,
            datas[i].spa,
            datas[i].fra,
            datas[i].ita
          );
        }
      }
      // step 2 -> searchResult is as one array
      setSearchResult(tempSearch);
    } else {
      setSearchResult(tempSearch);
    }
    console.log("result", searchResult);
  };

  console.table(searchResult);
  //step 3 -> make new array to split searchResult[] into array with object {pol, eng}
  let showArr = [];
  for (let i = 0; i < searchResult.length; i += 7) {
    showArr.push({
      pol: searchResult[i],
      eng: searchResult[i + 1],
      ger: searchResult[i + 2],
      ned: searchResult[i + 3],
      spa: searchResult[i + 4],
      fra: searchResult[i + 5],
      ita: searchResult[i + 6]
    });
  }

  //step 4 -> map showArr to showing on screen
  const showResult = showArr.map(item => (
    <tr>
      <td className="lang-color-pol">{item.pol}</td>
      <td className="lang-color-eng">{item.eng}</td>
      <td className="lang-color-ger">{item.ger}</td>
      <td className="lang-color-ned">{item.ned}</td>
      <td className="lang-color-spa">{item.spa}</td>
      <td className="lang-color-fra">{item.fra}</td>
      <td className="lang-color-ita">{item.ita}</td>
    </tr>
  ));

  console.log("showArr", showArr);

  return (
    <>
      <div className="main__header">
        <div className="main__header-circle"></div>
        <input
          type="text"
          className="search"
          placeholder="Search a word..."
          onChange={handleSearch}
        />
        <div className={showArr.length ? "header__table" : ""}>
          <table>{showResult}</table>
        </div>
      </div>
    </>
  );
};

export default Search;

/*
else {
      for (let i = 0; i < datas.length; i++) {
        if (
          datas[i].pol.includes(finded) ||
          datas[i].eng.includes(finded) ||
          datas[i].ger.includes(finded) ||
          datas[i].ned.includes(finded) ||
          datas[i].spa.includes(finded) ||
          datas[i].fra.includes(finded) ||
          datas[i].ita.includes(finded)
        ) {
          console.log(datas[i].pol, datas[i].eng, datas[i].ger);

          setSearchResult({
            ...searchResult,
            pol: datas[i].pol,
            eng: datas[i].eng,
            ger: datas[i].ger,
            ned: datas[i].ned,
            spa: datas[i].spa,
            fra: datas[i].fra,
            ita: datas[i].ita
          });

          console.log("searchResult", searchResult);
        }
        // else {
        //   setSearchResult({
        //     pol: "nie znaleziono",
        //     eng: "No finds",
        //     ger: datas[i].ger,
        //     ned: datas[i].ned,
        //     spa: datas[i].spa,
        //     fra: datas[i].fra,
        //     ita: datas[i].ita
        //   });
        // }
      }
    }
    */

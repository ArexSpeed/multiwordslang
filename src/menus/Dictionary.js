import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const Dictionary = () => {
  const dico = datas.map(item => (
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

  return (
    <>
      <Search />
      <div className="dico__table">
        <table className="dico__table-table">
          <tr>
            <th>POL</th>
            <th>ENG</th>
            <th>GER</th>
            <th>NED</th>
            <th>SPA</th>
            <th>FRA</th>
            <th>ITA</th>
          </tr>
          {dico}
        </table>
      </div>
    </>
  );
};

export default Dictionary;

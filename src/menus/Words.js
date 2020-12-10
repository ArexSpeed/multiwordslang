import React from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import { categories, datas } from "../data/categories";
import "../styles/style.css";

const Words = props => {
  console.log(props);
  console.log("lvl", props.match.params.lvl);

  const level = props.match.params.lvl;

  const category = categories.map(cat => {
    if (level === cat.lvl) {
      console.log(cat.lvl);
      return (
        <Link
          key={cat.id}
          to={`/words/${cat.lvl}/${cat.name}`}
          className="main__category-choose"
        >
          {cat.name}
        </Link>
      );
    }
  });

  return (
    <main className="main">
      <Search />

      <div className="word__card">
        <span className="word__card-title">Choose category: </span>
        <ul className="main__lang-desc">{category}</ul>
      </div>
    </main>
  );
};

export default Words;

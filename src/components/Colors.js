import React, {useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import "../styles/style.css";

const Colors = () => {
  const { color } = useContext(GlobalContext);
  const [colorValue, setColorValue] = color;
  //console.log(colorValue, 'color na start')

  const changeColor = () => {
    colorValue === 'white' ? setColorValue('black') : setColorValue('white');
  };

  useEffect(() => {
    let bgColor = colorValue === 'black' ? '#333' : '#fff';
    document.body.style = `background: ${bgColor};`;
  }, [colorValue])

  return (
    <button onClick={changeColor} className="main__header-color" />
  );
};

export default Colors;
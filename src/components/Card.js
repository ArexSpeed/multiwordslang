import React, {useContext} from "react";
import {WordCard} from './Styled';
import { GlobalContext } from "../context";

const Card = (props) => {
  const {color } = useContext(GlobalContext);
  const [colorValue, setColorValue] = color;
  console.log('color value in card', colorValue)
  return (
    <WordCard color={colorValue}>
      {props.children}
    </WordCard>
  );
};

export default Card;
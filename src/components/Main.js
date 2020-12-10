import React from "react";
import {MainStyle} from './Styled';

const Main = (props) => {
  return (
    <MainStyle>
      {props.children}
    </MainStyle>
  );
};

export default Main;

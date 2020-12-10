import React, {useContext} from "react";
import "./App.css";
import "./styles/style.css";

import Menu from "./components/Menu";
import Circles from "./components/Circles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider, GlobalContext } from "./context";

import Home from "./menus/Home";
import Words from "./menus/Words";
import WordsCard from "./menus/WordsCard";
import Memo from "./menus/Memo";
import MemoStart from "./components/MemoStart";
import Test from "./menus/Test";
import TestConnect from "./menus/TestConnect";
import ConnectStart from "./testcomponent/ConnectStart";

import HideTest from "./testcomponent/HideTest";
import FillTest from "./testcomponent/FillTest";
import Dictionary from "./menus/Dictionary";
import NoMatch from "./menus/NoMatch";
import Main from "./components/Main";

function App() {
  // const {color } = useContext(GlobalContext);
  // const [colorValue, setColorValue] = color;
  // console.log(colorValue, "value color")
  return (
    <div className="App container">
      <GlobalProvider>
      <Router>
        <Menu />
        <main className="main">
        <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/words/:lvl" component={Words} />
          <Route path="/words/:lvl/:cat" component={WordsCard} />
          <Route exact path="/memo" component={Memo} />
          <Route path="/memo/start" component={MemoStart} />
          <Route path="/test" component={Test} />
          <Route path="/connect" component={TestConnect} />
          <Route path="/connectstart" component={ConnectStart} />
          <Route path="/hidestart" component={HideTest} />
          <Route path="/filltest" component={FillTest} />
          <Route path="/dictionary" component={Dictionary} />
          <Route component={NoMatch} />
        </Switch>
        </main>

        <Circles />
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

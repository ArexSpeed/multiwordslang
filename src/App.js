import React from "react";
import "./App.css";
import "./styles/style.css";

import Menu from "./components/Menu";
import Circles from "./components/Circles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App container">
      <Router>
        <Menu />
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
        <Circles />
      </Router>
    </div>
  );
}

export default App;

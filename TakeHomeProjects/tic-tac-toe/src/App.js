import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChooseMode from "./components/ChooseMode";
import ChooseSign from "./components/ChooseSign";
import GameBoard from "./components/GameBoard";
import EndScreen from "./components/EndScreen";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ChooseMode}></Route>
				<Route exact path="/chooseSign" component={ChooseSign}></Route>
				<Route exact path="/gameBoard" component={GameBoard}></Route>
				<Route exact paht="/endScreen" component={EndScreen}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

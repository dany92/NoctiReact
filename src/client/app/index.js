import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import Layout from "./components/Layout";
import Home from "./routes/Home";
import Venue from "./routes/Venue";

const app = document.getElementById('app');

const render = () => {
	ReactDOM.render(
		<Provider>
			<Router history={hashHistory}>
				<Route path="/" component={ Layout }>
					<IndexRoute component={ Home }></IndexRoute>
					<Route path="venues" component={ Venue }></Route>
				</Route>
			</Router>
		</Provider> 
	, app)
}

render();
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Home from "./routes/Home";
const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={ Layout }>
			<IndexRoute component={ Home }></IndexRoute>
		</Route>
	</Router> 
, app);
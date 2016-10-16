import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Layout from "./components/Layout";
import Home from "./routes/Home";
import Venue from "./routes/Venue";
import rootReducer from './reducers';

const app = document.getElementById('app');

let initState = {
	venues: []
};

const store = createStore(rootReducer, initState);

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
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
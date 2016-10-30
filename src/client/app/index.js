import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Layout from "./components/Layout";
import Home from "./routes/Home";
import Venue from "./routes/Venue";
import VenueDetails from "./routes/VenueDetails";
import Event from "./routes/Event";
import EventDetails from "./routes/EventDetails";
import EventNew from './routes/EventNew';
import rootReducer from './reducers';

const app = document.getElementById('app');

const initState = {};

const middleware = [promise, thunk];

const store = createStore(rootReducer, initState, applyMiddleware(...middleware));

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={ Layout }>
					<IndexRoute component={ Home }></IndexRoute>
					<Route path="/venues" component={ Venue }></Route>
					<Route path="/venues/:id" component={ VenueDetails }></Route>
					<Route path="/events" component={ Event }></Route>
					<Route path="/events/new" component={ EventNew }></Route>
					<Route path="/events/:id" component={ EventDetails }></Route>
				</Route>
			</Router>
		</Provider> 
	, app)
}

render();
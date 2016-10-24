import { combineReducers } from 'redux';

import venues from './venues';
import events from './events';

const appReducer = combineReducers({ 
	venues, events
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
}

export default rootReducer;

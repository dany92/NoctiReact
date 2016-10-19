import { combineReducers } from 'redux';

import venues from './venues';
import events from './events';

const rootReducer = combineReducers({ 
	venues, events
});

export default rootReducer;

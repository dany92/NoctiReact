'use strict';
import _ from 'lodash';
import Sequelize from 'sequelize';

import db from '../_db';

const eventAttendeeModel = db.define('event_attendee', 
	{

	}, 
    {
    	timestamps: false
    }
);

export default eventAttendeeModel;
'use strict';
import _ from 'lodash';
import Sequelize from 'sequelize';

import db from '../_db';

const userModel = db.define('user', 
	{
	    email: {
	        type: Sequelize.STRING
	    },
	    password: {
	        type: Sequelize.STRING
	    }
	}
);

export default userModel;
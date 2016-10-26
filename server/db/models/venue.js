'use strict';
import _ from 'lodash';
import Sequelize from 'sequelize';

import db from '../_db';

const venueModel = db.define('venue', 
    {
        name: {
            type: Sequelize.STRING
        },
        address: {
        	type: Sequelize.STRING
        },
        lat:{
            type: Sequelize.FLOAT
        },
        long:{
            type: Sequelize.FLOAT
        },
        category: {
            type: Sequelize.ENUM('bar', 'nightclub')
        },
        email: {
        	type: Sequelize.STRING
        },
        phone: {
        	type: Sequelize.STRING
        },
        website: {
        	type: Sequelize.STRING
        }
    }, 
    {
        timestamps: false
    }
);

export default venueModel;

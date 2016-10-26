'use strict';
import _ from 'lodash';
import Sequelize from 'sequelize';

import db from '../_db';

const eventModel = db.define('event', 
    {
        title: {
            type: Sequelize.STRING
        },
        description: {
        	type: Sequelize.TEXT
        },
        start_date: {
        	type: Sequelize.DATE
        },
        end_date:{
        	type: Sequelize.DATE
        }
    }, 
    {
        getterMethods: {
            isPast: function(){
                return this.end_date < new Date();
            },
            timeRemaining: function(){
                var one_day=1000*60*60*24;
                return parseInt((this.start_date - new Date())/one_day); 
            }
        },
        defaultScope: {
            include: [db.model('venue'), db.model('user')]
        }
    }
);

export default eventModel;
'use strict';
import _ from 'lodash';
import Sequelize from 'sequelize';

import db from '../_db';

const promotionModel = db.define('promotion', 
    {
        title: {
            type: Sequelize.STRING
        },
        secret_code: {
            type: Sequelize.STRING
        },
        start_date: {
            type: Sequelize.DATE
        },
        end_date:{
            type: Sequelize.DATE
        },
        filter: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        }
    }
);

export default promotionModel;
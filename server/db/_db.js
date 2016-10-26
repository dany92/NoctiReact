import path from 'path';
import Sequelize from 'sequelize';

import env from '../env'

const db = new Sequelize(env.DATABASE_URI, { logging: env.LOGGING });
export default db;
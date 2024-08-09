import { Sequelize } from 'sequelize';
import accountModel from './account.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database_setup/mydatabase.db'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Account = accountModel(sequelize, Sequelize);

export default db;